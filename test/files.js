let Files = java.nio.file.Files;
let Paths = java.nio.file.Paths;
// console.log(Files.exists(Paths.get("/sdcard/文件夹/2.txt"))); //返回false

for(let i in Files){
    console.log(i);
}
