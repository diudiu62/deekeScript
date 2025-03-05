// zip.ts
import path from 'path';
import fs from 'fs';
import AdmZip from 'adm-zip';

// 获取上层目录路径
const parentDir = path.join(__dirname, '..');
console.log('开始执行打包');

// 创建 zip 实例
const zip = new AdmZip();

// 递归添加文件并排除目录
function addFilesToZip(directory: string) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        const relativePath = path.relative(parentDir, fullPath);

        // 排除 DeekeScript 和 node_modules 目录
        if (relativePath.startsWith('src') || relativePath.startsWith('.vscode') || relativePath.startsWith('.git') || relativePath.startsWith('@deekeScript') || relativePath.startsWith('node_modules')) {
            console.log('排除目录：' + relativePath);
            return;
        }

        // 处理子目录或文件
        if (fs.statSync(fullPath).isDirectory()) {
            addFilesToZip(fullPath); // 递归处理子目录
        } else {
            zip.addLocalFile(fullPath, path.dirname(relativePath));
        }
    });
}

// 执行压缩
addFilesToZip(parentDir);
zip.writeZip(path.join(parentDir, 'deekeScript.zip'));

console.log('打包完成');
