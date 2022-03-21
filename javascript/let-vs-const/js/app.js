window.onload = () => {
    let message = document.getElementById(`msg`);
    let notMax = 30;
    const MAX = 20;
    message.textContent = MAX;
    message.textContent += notMax;
    notMax++;
    message.textContent += notMax;
};
