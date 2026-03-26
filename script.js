let clockelement=document.getElementById("clock");
function updateClock(){
    let now=new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if(minutes<10){
    minutes="0"+minutes;
    }
    let seconds = now.getSeconds();
    if(seconds<10){
        seconds="0"+seconds;
    }
    let currentTime= hours+":"+minutes+":"+seconds;
    clockelement.textContent=">_ "+currentTime;
}
updateClock();
setInterval(updateClock,1000);


let posts = [
    {
        title : '>_idk what i did',
        date :'Feb 27,2026. 1:10 AM',
        content : '>_yeh, idk why this shit came into my mind..'
    },
    {
        title : '>_ post 2',
        date :'Month DD,YYYY. HH:MM am/pm',
        content : '>_ paragraph yet to be added'
    }
]
let container = document.getElementById("container");
for(let i=0;i<posts.length;i++)
{
    let article = document.createElement("article");
    let title = document.createElement("h2");
    title.textContent=posts[i].title;
    article.appendChild(title);
    let date = document.createElement("span");
    date.textContent=posts[i].date;
    article.appendChild(date);
    let content = document.createElement("p");
    content.textContent=posts[i].content;
    article.appendChild(content);
    container.appendChild(article);
}