const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatOutput = document.getElementById('chat-output');

sendBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();
    if (userText !== "") {
        const userMessage = `<div><strong>You:</strong> ${userText}</div>`;
        const botMessage = `<div><strong>AiNova:</strong> This is a sample response. 🚀</div>`;
        chatOutput.innerHTML += userMessage + botMessage;
        chatOutput.scrollTop = chatOutput.scrollHeight;
        userInput.value = "";
    }
});
