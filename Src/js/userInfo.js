//  This is User Inforamtion code ...

let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
function  start(){
    location.href = "start.html"
}
let change = document.getElementById("change");
change.style.backgroundImage = "url(images/quizresult.jpg)";
console.log(change)


