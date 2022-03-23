window.onload = () => {
    let textBox = document.getElementById(`text-box`),
        numberBox = document.getElementById(`number-box`),
        body = document.getElementsByTagName(`body`)[0],
        randomRed = 255,
        randomGreen = 255,
        randomBlue = 255,
        errorStyles = `background-color: red; padding: 2px;
            color: white; font-family: monospace; border-radius: 4px;`,
        resetErrorStyles = `background-color: inherit; padding: inherit;
            color: inherit; font-family: inherit; border-radius: none;`;

    function getRandomIntInclusive () {
        // The maximum is inclusive and the minimum is inclusive
        return Math.floor(Math.random() * 256);
    }

    if (null !== textBox) {
        textBox.addEventListener(`keyup`, () => {
            body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            randomRed = getRandomIntInclusive();
            randomGreen = getRandomIntInclusive();
            randomBlue = getRandomIntInclusive();
        });
    } else {
        console.error(
            `A reference to ID %c text-box %c could not be established.`,
            errorStyles, resetErrorStyles);
    }

    if (null !== numberBox) {
        document.onkeydown = (e) => {
            console.info(e.code);

            if (`ArrowUp` === e.code) {
                document.querySelector(`body`).style.backgroundColor =
                    `rgb(${Math.abs(randomRed)},
                         ${Math.abs(randomGreen)},
                         ${Math.abs(randomBlue)})`;

                randomRed += 5;
                randomGreen += 5;
                randomBlue += 5;
            } else {
                if (e.code === `ArrowDown`) {
                    document.querySelector(`body`).style.backgroundColor =
                        `rgb(${Math.abs(randomRed)},
                             ${Math.abs(randomGreen)},
                             ${Math.abs(randomBlue)})`;

                    randomRed -= 5;
                    randomGreen -= 5;
                    randomBlue -= 5;
                }
            }
        };
    } else {
        console.error(
            `A reference to ID %c number-box %c could not be established.`,
            errorStyles, resetErrorStyles);
    }
};
