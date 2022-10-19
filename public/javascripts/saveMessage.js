document.querySelector('.btn').addEventListener('click', (e) => {
    text = document.querySelector('.input').value
    if (text !== "") {
        console.log(text)
    }
    else {
        console.log("Please enter a valid text")
    }
});
