<!DOCTYPE HTML>
<html>
    <head>
        <title>country name with alpha3code and population</title>
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
    for(var i in jsonData){console.log(jsonData[i].name,":",jsonData[i].alpha3Code,"    population :",jsonData[i].population)}};request.send();//to print the country name along with alpha3code and its population
