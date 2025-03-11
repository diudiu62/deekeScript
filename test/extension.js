let javaString = new java.lang.String('Java');
console.log(javaString);//输出："Java"
console.log(java.lang.Math.PI);//输出："3.141592653589793"
console.log(new java.util.Date());//输出："Tue Jan 14 10:52:55 CST 2025"

let f = new java.io.File("test.txt");
console.log(f.exists());// false


let Files = java.nio.file.Files;
let path = java.nio.file.Paths.get('example.txt');
console.log(Files.exists(path));//输出：false


let obj = {
    run: function () {
        console.log('线程');
    }
}

//注意java.lang.Thread和java.lang.Runnable外层不需要引号
let javaImporterTest = JavaImporter(java.lang.Thread, java.lang.Runnable);

with (javaImporterTest) {
    new Thread(new Runnable(obj)).start();
}
