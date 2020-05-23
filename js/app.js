(function (window, document, drawModule, undefined) {

    // Connect the button in the html with the _init_ function
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        score = 0;
        drawModule.init();

        // CSS to improve the game visually
        document.getElementById("game").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        document.getElementById("start").style.display = "none";
        document.getElementById("score").style.display = "block";
    });

    document.onkeydown = function (event) {
        
        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {
            case 37:
                if (direction != "right") {
                    direction = "left";
                }
                break;
            case 38:
                if (direction != "down") {
                    direction = "up";
                }
                break;
            case 39:
                if (direction != "left") {
                    direction = "right";
                }
                break;
            case 40:
                if (direction != "up") {
                    direction = "down";
                }
                break;
        }
    }

})(window, document, drawModule)
;