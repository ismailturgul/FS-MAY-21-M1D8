const changeTitle = function(newTitle)
{
    document.title =newTitle;
}

const changePcontent = function()
{
    document.getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText = "Hi"
}