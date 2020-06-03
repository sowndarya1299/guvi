//1.1 Extract and print all the country name with the flag URL in console
<!DOCTYPE HTML>
<html>
    <head>
        <title>api countries 1.1 to country name with flag</title>
    </head>
    <body>
        
    <script src="api.js">
        </script>
    </body>
    </html>
//script tag
var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)//link is to get the rest countries
request.onload=function(){
    var jsonData=JSON.parse(this.response)
    for(var i in jsonData){console.log(jsonData[i].name,jsonData[i].flag)}};request.send();//to print the country name along with flag
