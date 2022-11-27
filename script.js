// 1: How to compare two json have the same properties without order?
var a = {"name": "Person 1", "age": "5"};
var b = {"age": "5", "name": "Person 1"};
var flag = true;
if (Object.keys(a).length == Object.keys(b).length)
{
    for(var key in a)
    {
        if (a[key]==b[key])
        {
            continue
        }
        else
        {
            flag = false;
            break;
        }
    }
}else {
    flag = false;
}
console.log(flag)

// 2. Use the rest countries API URL and display all countriens flags in the console

var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    for (c of b)
{
    console.log(c.flags.png)
}
}

// 3.use the rest countries and print all countries name,region,sub-region and populations

var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    for (c of b)
{
    console.log(c.name, c.region, c.subregion, c.populations)
}
}