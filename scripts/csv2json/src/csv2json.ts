/**
 * $ yarn ts-node csv2json.ts <input-file> <output-dir>
 * 
 * input-file: input file.
 * output-dir: option. output dir. if output dir do not exist, script create it.
 */


import fs from 'fs';
import path from 'path';
import { promisify } from "util";
import csvparse from 'csv-parse';

// fsIOをPromiseでwrap
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// csv-parseをPromiseでwrap
const parse = (input: string, options?: csvparse.Options): Promise<any> => {
    return new Promise((resolve, reject) => csvparse(input, options, (err, output) => {
        if (err !== undefined) reject(err);
        return resolve(output);
    }));
};

const sessionHours = (day: string, no: string): string => {
    const day1Schedules = [
        '11:25 - 12:10',
        '13:40 - 14:25',
        '14:40 - 15:10',
        '16:00 - 16:15',
        '16:30 - 16:45'
    ];
    const day2Schedules = [
        '11:15 - 12:00',
        '13:30 - 14:00',
        '14:15 - 14:45',
        '15:45 - 16:00',
        '16:15 - 16:30'
    ];
    const schedules = [day1Schedules, day2Schedules];
    // session.day, session.noは1始まり
    return schedules[parseInt(day) - 1][parseInt(no) - 1];
};

const csv2json = async (): Promise<void> => {

    // csvファイルの読み込み
    const inputPath: string = process.argv[2];
    const outputDir: string | undefined = process.argv[3];
    const buf: Buffer = await readFile(inputPath).catch(err => {
        console.error(err);
        process.exit(1);
        return new Buffer('');
    });

    // 最初の行が "id" で始まっていれば最初の行をkeyとして扱う
    const data: string[] = buf.toString().split(/\r\n|\n/);
    const from_line = data[0].startsWith('id') ? 1 : 2;

    // JSON化
    const obj = await parse(buf.toString(), { columns: true, from_line });

    // sessions.jsonを出力するときhoursを付与
    const objWithHours = !inputPath.match(/sessions/) ? obj : obj.map((session: any): object => {
        if (session.day) {
            const hoursObj = { hours: sessionHours(session.day, session.no) };
            return Object.assign(session, hoursObj);
        }
        return session;
    });
    let outputPath: string = path.parse(inputPath).name + '.json';

    // 出力ディレクトリが指定されていればそこに書き出し
    if (outputDir !== undefined) {
        // 出力ディレクトリが存在しなければ作成
        if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
        outputPath = path.join(outputDir, outputPath);
    }

    // 書き出し
    writeFile(outputPath, JSON.stringify(objWithHours)).catch(err => {
        console.error(err);
    });
}

export default csv2json;

