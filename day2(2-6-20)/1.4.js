//1.4 Display the count of all countries sharing their border with the country name in console.
<!DOCTYPE HTML>
<html>
    <head>
        <title>countries with border sharing</title>
    </head>
    <body>
        
    <script src="api.js">
        </script>
    </body>
    </html>
//script file
var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.onload=function(){
    var jsonData=JSON.parse(this.response)
   for(var i in jsonData){ var country=jsonData[i].name;
    var border=[];
    border=jsonData[i].borders; 
    var length=border.length;
    console.log(country+" shares its border with "+length+" countries that includes ("+border+")");//countries with border sharing are printed
    country="";
    border=[];
    length=0;
}
};
request.send();
