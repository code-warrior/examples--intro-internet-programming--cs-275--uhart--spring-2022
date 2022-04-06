window.onload = () => {
    let output = document.getElementById(`output`);
    let myArray = ["edbob",2,true,4,5];
    let beatles = [`Ringo`, `George`, `John`, `Paul`];

    let [drummer, guitarist] = beatles;
    // let drummer = beatles[0];
    // let guitarist = beatles[1];


    alert(`The Beatles’ drummer was ${drummer}`);
    alert(`The Beatles primary guitarist was ${guitarist}`);

    // Infinite loop
    // for ( ; ; )
    //     ;

    for ( let i = 0; i < 100; ) {
        output.textContent += `The item at ${i} is ${myArray[i]}`;
        i+=20;
    }
};
