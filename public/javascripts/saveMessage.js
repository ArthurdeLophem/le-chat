document.querySelector('.btn').addEventListener('click', (e) => {
    text = document.querySelector('.input').value
    if (text !== "") {
        console.log(text)
        const message = {
            username: 'Elon Musk',
            message: text
        }
        fetch('http://localhost:3000/api/v1/messages', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            }
            );

    }
    else {
        console.log("Please enter a valid text")
    }
});
