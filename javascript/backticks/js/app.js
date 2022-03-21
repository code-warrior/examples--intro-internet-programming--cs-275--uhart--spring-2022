window.onload = () => {
    let message = document.getElementById(`msg`);
    let x = 10;
    let y = 20;

    console.log(`x is ${x}`);
    message.innerHTML = `<p>x is ${x}</p>`;
    message.innerHTML += (`<p>The sum of x and y is ${x} + ${y}</p>`);
    message.innerHTML += (`<p>This is <b>bold</b></p>`);
    message.innerHTML += (`<p>The sum of x and y is ${x + y}</p>`);
};
