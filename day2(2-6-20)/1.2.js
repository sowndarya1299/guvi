//1.2 Extract and print the all the country name with capital name in console
<!DOCTYPE HTML>
<html>
    <head>
        <title>country name with capital</title>
    </head>
    <body>
        
    <script src="api.js">
        </script>
    </body>
    </html>
//script
var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.onload=function()
    var jsonData=JSON.parse(this.response)
    for(var i in jsonData){
  console.log(jsonData[i].name,":",jsonData[i].capital)//loop to print all the countries with capitals
}
};
request.send();

