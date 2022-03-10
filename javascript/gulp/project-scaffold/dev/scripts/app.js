window.onload = () => {
    let body = document.querySelector(`body`);
    let paragraph = document.createElement(`p`);
    let text = document.createTextNode(`If you can see this content in blue with ` +
        `a light blue background, then JavaScript and CSS are ` +
        `working. Look at the “dev” folder for placing your HTML, CSS, and ` +
        `JavaScript.`);

    paragraph.appendChild(text);
    body.appendChild(paragraph);
};
