"use strict";
/**
 * $ yarn ts-node csv2json.ts <input-file> <output-dir>
 *
 * input-file: input file.
 * output-dir: option. output dir. if output dir do not exist, script create it.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = require("util");
var csv_parse_1 = __importDefault(require("csv-parse"));
// fsIOをPromiseでwrap
var readFile = util_1.promisify(fs_1.default.readFile);
var writeFile = util_1.promisify(fs_1.default.writeFile);
// csv-parseをPromiseでwrap
var parse = function (input, options) {
    return new Promise(function (resolve, reject) { return csv_parse_1.default(input, options, function (err, output) {
        if (err !== undefined)
            reject(err);
        return resolve(output);
    }); });
};
var sessionHours = function (day, no) {
    var day1Schedules = [
        '11:25 - 12:10',
        '13:40 - 14:25',
        '14:40 - 15:10',
        '16:00 - 16:15',
        '16:30 - 16:45'
    ];
    var day2Schedules = [
        '11:15 - 12:00',
        '13:30 - 14:00',
        '14:15 - 14:45',
        '15:45 - 16:00',
        '16:15 - 16:30'
    ];
    var schedules = [day1Schedules, day2Schedules];
    // session.day, session.noは1始まり
    return schedules[parseInt(day) - 1][parseInt(no) - 1];
};
var csv2json = function () { return __awaiter(_this, void 0, void 0, function () {
    var inputPath, outputDir, buf, data, from_line, obj, objWithHours, outputPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputPath = process.argv[2];
                outputDir = process.argv[3];
                return [4 /*yield*/, readFile(inputPath).catch(function (err) {
                        console.error(err);
                        process.exit(1);
                        return new Buffer('');
                    })];
            case 1:
                buf = _a.sent();
                data = buf.toString().split(/\r\n|\n/);
                from_line = data[0].startsWith('id') ? 1 : 2;
                return [4 /*yield*/, parse(buf.toString(), { columns: true, from_line: from_line })];
            case 2:
                obj = _a.sent();
                objWithHours = !inputPath.match(/sessions/) ? obj : obj.map(function (session) {
                    if (session.day) {
                        var hoursObj = { hours: sessionHours(session.day, session.no) };
                        return Object.assign(session, hoursObj);
                    }
                    return session;
                });
                outputPath = path_1.default.parse(inputPath).name + '.json';
                // 出力ディレクトリが指定されていればそこに書き出し
                if (outputDir !== undefined) {
                    // 出力ディレクトリが存在しなければ作成
                    if (!fs_1.default.existsSync(outputDir))
                        fs_1.default.mkdirSync(outputDir);
                    outputPath = path_1.default.join(outputDir, outputPath);
                }
                // 書き出し
                writeFile(outputPath, JSON.stringify(objWithHours)).catch(function (err) {
                    console.error(err);
                });
                return [2 /*return*/];
        }
    });
}); };
exports.default = csv2json;
