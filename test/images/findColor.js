
let imageStr = Images.capture();
let left = 645;
let top = 627;

let rgba = Images.getColor(imageStr, 10, 30);
console.log(rgba);

let positions = Images.findColor(imageStr, rgba);
console.log(positions);
