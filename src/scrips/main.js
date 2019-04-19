function upDateText(event) {
    left = document.querySelector("#left"),
    right = document.querySelector("#right");

}
    document.querySelector("#textInput")
        .addEventListener("keyup", event => {
            left.innerHTML = event.target.value;
            right.innerHTML = event.target.value;

        })