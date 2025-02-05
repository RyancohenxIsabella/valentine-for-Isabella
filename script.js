function yesClicked() {
    alert("Yay Isabella! You just made Ryan Cohen the happiest guy ever! ❤️ Can't wait to celebrate with you!");
}

function moveButton(button) {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    button.style.left = x + "px";
    button.style.top = y + "px";
}
