window.onload = () => {
    // The content in the second parameter acts as the default if the user enters nothing.
    let input = window.prompt(`hello, world`, `40`);
    alert(`The type of input is ${typeof input}`);
    input = parseInt(input, 10);
    alert(`The type of input is ${typeof input}`);
};
