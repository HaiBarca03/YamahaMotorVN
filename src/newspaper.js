function ChatFunction() {
    const element = document.querySelector('.box__chat');
    element.classList.add('active__chat-box')
    const element1 = document.querySelector('.chat');
    element1.classList.add('active__fix-img')
}
function closeChat() {
    const element = document.querySelector('.box__chat')
    element.classList.remove('active__chat-box')
    const element1 = document.querySelector('.chat');
    element1.classList.remove('active__fix-img')
}