window.onload = () => {
    // The following 5 functions are equivalent in behavior,
    // but not equivalent in scope.

    // var a = function(value) {
    //     return value;
    // };

    // function a (value) {
    //     return value;
    // }

    // let a = function (value) {
    //     return value;
    // };

    // We can be redundant and use parens:
    // let a = (value) => value;

    let a = value => value;

    alert(a(`Hello, world!`));
};
