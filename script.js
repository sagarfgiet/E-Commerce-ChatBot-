const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const resetButton = document.getElementById('reset-chat');

function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message !== "") {
        addMessage(message, true);
        userInput.value = "";

        // Simulate bot response (replace with actual API call)
        setTimeout(() => {
            addMessage("This is a simulated bot response for: " + message, false);
        }, 500); // Simulate a short delay
    }
});

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      sendButton.click();
    }
  });

resetButton.addEventListener('click', () => {
    chatMessages.innerHTML = ""; // Clear chat messages
});