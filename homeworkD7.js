//ex1
const changeTitle = function(newTitle)
{
    document.title =newTitle;
}

//ex3
const changePcontent = function()
{
    document.getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText = "Hi"
}

//ex4
const changeUrls = function()
{
    document.getElementsByTagName("a")[0].innerHTML = "www.google.de"
}
//ex5
const addToTheSecond = function()
{
    let newItem = document.createElement("li")
    document.getElementById("secondList").append(newItem)
}