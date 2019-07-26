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
    let outputPath: string = path.parse(inputPath).name + '.json';

    // 出力ディレクトリが指定されていればそこに書き出し
    if (outputDir !== undefined) {
        // 出力ディレクトリが存在しなければ作成
        if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
        outputPath = path.join(outputDir, outputPath);
    }

    // 書き出し
    writeFile(outputPath, JSON.stringify(obj)).catch(err => {
        console.error(err);
    });
}

export default csv2json;

