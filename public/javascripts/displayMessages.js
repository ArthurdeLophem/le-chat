fetch('http://localhost:3000/api/v1/messages')
    .then((response) => response.json())
    .then((data) => {
        data.data.messages.forEach(element => {
            let message = document.createElement("div");
            let username = document.createElement("h2");
            let msgtext = document.createElement("p");
            message.classList.add("messageBlock");
            msgtext.innerHTML = element.message;
            username.innerHTML = element.username;
            message.appendChild(username);
            message.appendChild(msgtext);
            let msgList = document.querySelector(".messageList");
            msgList.appendChild(message);
        });
    }
    );

