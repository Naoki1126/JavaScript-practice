var height = 1.7;
var weight = 60;

// この下にコードを書いてください
console.log(`BMIは${weight/height/height}です`);

console.log(`適正体重は${height * height * 22}kgです`);
var bmi = weight / height / height;

if (bmi < 18.5){
  console.log("痩せ気味です");
}else if(bmi >= 18.5 && bmi < 25){
  console.log('普通です');
}else if(bmi >= 25){
  console.log('肥満気味です');
}