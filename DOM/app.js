// Example One 
let alertButton = document.createElement("button");
alertButton.textContent = "Smile Button";
document.body.appendChild(alertButton);

alertButton.addEventListener("click", function () {
    alert("Have a nice day! :)");
});

// Example Two
let textBox = document.getElementById("exTwoText");
let textBtn = document.getElementById("exTwoBtn");
let alertTwoText = document.getElementById("exTwoText").value;

textBtn.addEventListener("click", function () {
    alert(alertTwoText);
});

// Example Three
let exThreeDiv = document.getElementById("exThreeDiv");
exThreeDiv.setAttribute("style", "width: 100%; height: 50px; background-color: darkseagreen");

exThreeDiv.onmouseover = function () {
    exThreeDiv.setAttribute("style", "width: 100%; height: 50px; background-color: lavender");
};
exThreeDiv.onmouseout = function () {
    exThreeDiv.setAttribute("style", "width: 100%; height: 50px; background-color: darkseagreen");
};

// Example Four
let newPar = document.createElement('p');
newPar.textContent = "Here is a new paragraph! Here I talk about text! Is this enough text? Let's see!"
document.body.appendChild(newPar);

newPar.addEventListener("click", function () {
    newPar.style.color = changeColor();
});

function changeColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Example Five
let exFiveDiv = document.createElement("div");
exFiveDiv.id = "exFiveDiv";
document.body.appendChild(exFiveDiv);

let exFiveBtn = document.createElement("button");
exFiveBtn.textContent = "Add Span";
exFiveDiv.appendChild(exFiveBtn);

exFiveBtn.addEventListener("click", function () {
    let newSpan = document.createElement("span");
    newSpan.textContent = "Elliott Parker ";
    exFiveDiv.appendChild(newSpan);
});

// Example Six
let sixBtn = document.getElementById("exSixBtn");
sixBtn.textContent = "Add Friend";
let sixList = document.getElementById("exSixList");

sixBtn.addEventListener("click", function () {
    const friends = ["Kelsie", "Kelsey", "Aaron", "JT", "Paxton", "James", "Rachel", "Julian", "Dorian", "Piers"];
    for (i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let listItem = document.createElement("li");
        listItem.textContent = friend;
        sixList.appendChild(listItem);
    };
});
