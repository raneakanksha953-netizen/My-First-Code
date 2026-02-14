function selectOption (choice) {
    const  question = document.getElementById("question");
    const  option = document.getElementById("options");
    const  image = document.getElementById("result-image");
    const  firstImage = document.getElementById("first-image")

    if (choice === 'yes') {
        question.innerHTML = "Yess Sweetie!😎 I knew it💕";
            image.src = "happy.png";
    } else {
        question.innerHTML = "Oh Please! you supposed to click yes";
            image.src = "angry.png";
    }

    firstImage.style.display = "none"; //hide it first image
    image.style.display = "block";
    option.style.display = "none";
}