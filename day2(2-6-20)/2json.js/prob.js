//1.Parsing an JSON object’s Values:
var obj = {name : "RajiniKanth", age : 25, hasPets : true};
var c=[];
function printAllValues(obj) {
 for(var i in obj){var key=i;var a=obj[i];c.push(key);}
console.log(c);

}printAllValues(obj);

//2.Parsing an JSON object’s Keys:
var obj = {name : "RajiniKanth", age : 25, hasPets : true};
var c=[];
function printAllValues(obj) {
 for(var i in obj){var key=i;c.push(key);}
console.log(c);

}printAllValues(obj);


//3.Parsing an JSON object and convert it to a list:
var obj = {name:"ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
    var a=[]
 for(var i in obj)
 {
     var key=i;
     var val=obj[i]
     a.push([key,val]);
     val="";
 }
 console.log(a)
}
convertListToObject(obj);

//4.Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"]
function transformFirstAndLast(arr) {
    var newObject={};
    var key=arr[0];
    var value=arr[arr.length-1];    
    newObject[key]=value;
    return newObject;
  
}
console.log(transformFirstAndLast(arr))


//5.Parsing a list of lists and convert into a JSON object:
var arr = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
function fromListToObject(arr) {
  var newObject = {};
  for(var i=0;i<arr.length;i++)
 {
     var value=arr[i];
     var j=0
    newObject[value[j]]=value[j+1]  }
 return newObject;
}
console.log(fromListToObject(arr))


//6.Parsing a list of lists and convert into a JSON object:
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 var newObject={}
  for(var i=0;i<arr.length;i++)
  {
     var first=arr[i]
            for(var j=0;j<first.length;j++){
          var l=0;
          var inside=first[j];
                  
          newObject[inside[l]]=inside[l+1];}

      tranformEmployeeList.push(newObject);
  }
  return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));

//7.Parsing two JSON objects and Compare:
var expected = {foo: 5, bar: 6};
   var actual = {foo: 6, bar: 5}
   function assertObjectsEqual(actual, expected, testName){
   var actual1=JSON.stringify(actual);
   var expect=JSON.stringify(expected);
  var testCase=testName;
 if(actual1===expect)
   {
     console.log("Passed");
   }
    else
    {
     console.log("FAILED [my test] Expected"+expect+"but got"+act)
    }
    }
     assertObjectsEqual(actual,expected,"case1")
     
     
     //8.Parsing JSON objects and Compare:
      var securityQuestions = [
        {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
        },
        {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
        },
        {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
        }
       ]
       function chksecurityQuestions(securityQuestions,ques,ans) {
           var question=ques;
           var answer=ans;
           var newobj={}
           newobj["question"]=question;
           newobj["expectedAnswer"]=answer;
           for(var i=0;i<securityQuestions.length;i++)
           {
              if(JSON.stringify(securityQuestions[i])==JSON.stringify(newobj))
               {
                   return true;
               }
               else
               {
                   return false;
               }
           }
       }
       var status=chksecurityQuestions(securityQuestions,"What was your first pet’s name?","FlufferNutter");
       console.log(status);
       
    //9.Parsing JSON objects and Compare:
    var students = [
    {
    name:"Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},
    {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name:"Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
    function returnMinors(arr)
     {
       var a=[];
       for(var i=0;i<students.length;i++)
      {
           if(students[i]["age"]>20)
           {
               a.push(students[i]["name"])
           }
       }
       return a;
   }
   console.log(returnMinors(students));
