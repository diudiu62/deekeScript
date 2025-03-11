var Files = Packages.java.nio.file.Files;
var path = Packages.java.nio.file.Paths.get('example.txt');
console.log(Files.exists(path));//输出：false
