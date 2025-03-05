"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// zip.ts
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var adm_zip_1 = __importDefault(require("adm-zip"));
// 获取上层目录路径
var parentDir = path_1.default.join(__dirname, '..');
console.log('开始执行打包');
// 创建 zip 实例
var zip = new adm_zip_1.default();
// 递归添加文件并排除目录
function addFilesToZip(directory) {
    var files = fs_1.default.readdirSync(directory);
    files.forEach(function (file) {
        var fullPath = path_1.default.join(directory, file);
        var relativePath = path_1.default.relative(parentDir, fullPath);
        // 排除 DeekeScript 和 node_modules 目录
        if (relativePath.startsWith('src') || relativePath.startsWith('.vscode') || relativePath.startsWith('.git') || relativePath.startsWith('@deekeScript') || relativePath.startsWith('node_modules')) {
            console.log('排除目录：' + relativePath);
            return;
        }
        // 处理子目录或文件
        if (fs_1.default.statSync(fullPath).isDirectory()) {
            addFilesToZip(fullPath); // 递归处理子目录
        }
        else {
            zip.addLocalFile(fullPath, path_1.default.dirname(relativePath));
        }
    });
}
// 执行压缩
addFilesToZip(parentDir);
zip.writeZip(path_1.default.join(parentDir, 'deekeScript.zip'));
console.log('打包完成');
//# sourceMappingURL=deekeScriptZipBuild.js.map