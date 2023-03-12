// IIFE - Immediately Invoked Function Expression
(function () {

    const messages = [
        'About',
        'Nice to see you!',
        'Hello'
    ]

    function getGreeting()  {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }

    const title = document.querySelector('.about__title');
    title.innerHTML = getGreeting();
    
    // setTimeout(() => {
    //     // document.body.innerHTML = '';
    //     document.body.style.opacity = 0.5;
    // } , 3000);

})();