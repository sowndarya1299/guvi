var lan=["tamil","english","telugu","malayalam"];
var newa = function(a){
var str=[]
for(i=0;i<lan.length;i++){//iteration to run all the data in array
var eng=lan[i];
var dot=(eng[0].toUpperCase()+eng.slice(1))//to convert first line into uppercase
str.push(dot);}//push the data in a new array
console.log(str);
}newa(lan);//function is called
