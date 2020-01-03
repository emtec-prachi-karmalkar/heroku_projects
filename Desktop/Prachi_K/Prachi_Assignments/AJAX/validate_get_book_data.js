var cnt_title=1;

function load_Books(code_name) 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if(this.readyState === 1)
        {
            console.log("State:",this.readyState,"(Server Connection Established) & Status:",this.status);
        }
        else if(this.readyState === 2)
        {
            console.log("State:",this.readyState,"(Request Received) & Status:",this.status);
        }
        else if(this.readyState === 3)
        {
            console.log("State:",this.readyState,"(Processing Request) & Status:",this.status);
        }
        else if(this.readyState === 4)
        {
            console.log("State:",this.readyState,"(Request Finished and Response is Ready) & Status:",this.status);
        }
        if (this.readyState == 4 && this.status == 200) 
        {
            if(code_name=="title")
            {
                getTitle(this);
            }
            if(code_name=="author")
            {
                getAuthor(this);
            }
        }
    };
    xhttp.open("GET", "books.xml", true);
    xhttp.send();
}

function getTitle(xml) 
{
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("book");
    for (i = 0; i <x.length; i++) 
    { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    if(cnt_title==1)
    {
        document.getElementById("table").innerHTML = table;
        var auth_btn = "<button type= button onclick=load_Books('author')>Get Author</button>";
        document.getElementById("button_get_auth").innerHTML= auth_btn;
    }
    if(cnt_title==2)
    {
        document.getElementById("table3").innerHTML = table;
    }
}

function getAuthor(xml) 
{
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("book");
    for (i = 0; i <x.length; i++) 
    { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("table2").innerHTML = table;
    cnt_title=2;
    var title2_btn = "<button type= button onclick=load_Books('title')>Get Titles</button>";
    document.getElementById("button_get_title2").innerHTML= title2_btn;
}	