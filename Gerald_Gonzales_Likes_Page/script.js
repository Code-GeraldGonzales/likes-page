console.log("connected to js");

var likes = [9, 12, 9];
var target = [
    document.querySelector("#addLikesTop"),
    document.querySelector("#addLikesMiddle"),
    document.querySelector("#addLikesBottom"),

];

function add1(id) {
    likes[id]++;
    target[id].innerHTML = likes[id] + " like(s)";
}