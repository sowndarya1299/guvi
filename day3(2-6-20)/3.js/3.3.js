function palindrom(num,pal)
{
    if(pal(num)==num)
    {
        return "palindrom";
    }
    else{
        return "not palindrom";
    }
}function checkpal(num){
    var dig;var req=0
    while(num!=0)
    {
        dig=num%10;
        req=req+(dig*10);
        num=num/10;
    }
    return req;
} 
var a=palindrom(44,checkpal)           
console.log(a)
