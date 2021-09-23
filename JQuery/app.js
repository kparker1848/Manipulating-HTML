$(document).ready(function () {
    // Example One
    let alertButton = $("<button></button>");
    alertButton.text("Smile Button");
    $("body").append(alertButton);

    $(alertButton).click(function () {
        alert("Have a nice day! :)")
    });

    // Example Two 
    $("#exTwoBtn").click(function () {
        alert($("input[type=text]").val())
    });

    // Example Three
    $("#exThreeDiv").css({
        "width": "100em",
        "height": "10em",
    });

    $("#exThreeDiv").mouseover(function () {
        $("#exThreeDiv").css({
            "width": "100em",
            "height": "10em",
            "background-color": "darkseagreen"
        });
    });
    $("#exThreeDiv").mouseout(function () {
        $("#exThreeDiv").css({
            "width": "100em",
            "height": "10em",
            "background-color": "white"
        });
    });

    // Example Four
    let newPar = $("<p></p>")
    newPar.text("This is a new paragraph! I think I'll talk about the band I'm listening to. Everyone go listen to the Amazing Devil. They're amazing.")
    $("body").append(newPar);

    $(newPar).click(function () {
        newPar.css("color", changeColor());
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
    let newDiv = $("<div></div>");
    $("body").append(newDiv);

    let nameButton = $("<button></button>");
    nameButton.text("Add Name");
    $(newDiv).append(nameButton);

    $(nameButton).click(function () {
        let newSpan = $("<span></span>");
        newSpan.text("Elliott Parker ")
        $(newDiv).append(newSpan);
    });

    // Example Six
    let counter = 0;

    $("#friendButton").click(function () {
        const friends = ["Kelsie", "Kelsey", "Paxton", "JT", "Aaron", "Rachel", "James", "Julian", "Dorian", "Piers"]
        if (counter == 10) {
            return;
        } else {
            let friend = friends[counter];
            let newItem = $("<li></li>");
            newItem.text(friend);
            $("#friendList").append(newItem);
            counter++;
        };
    });
});