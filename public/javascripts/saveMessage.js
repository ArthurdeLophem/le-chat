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
                console.log(data.data.messages)
                const msgData = data.data.messages;
                let message = document.createElement("div");
                let username = document.createElement("h2");
                let msgtext = document.createElement("p");
                message.classList.add("messageBlock");
                msgtext.innerHTML = msgData.message;
                username.innerHTML = msgData.username;
                message.appendChild(username);
                message.appendChild(msgtext);
                let msgList = document.querySelector(".messageList");
                msgList.appendChild(message);
            }
            );

    }
    else {
        console.log("Please enter a valid text")
    }
});
