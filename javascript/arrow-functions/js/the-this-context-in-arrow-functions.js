window.onload = () => {
    // function createTeacher () {
    //     this.firstName = `Walter`;
    //     this.lastName = `White`;

    //     console.log(`My name is ${this.firstName} ${this.lastName}.`);

    //     let _this = this;

    //     document.addEventListener(`click`, function () {
    //         console.log(`My name is ${_this.firstName} ${_this.lastName}.`);
    //     });
    // }

    function createTeacher () {
        this.firstName = `Walter`;
        this.lastName = `White`;

        console.log(`My name is ${this.firstName} ${this.lastName}.`);

        document.addEventListener(`click`, () => {
            console.log(`My name is ${this.firstName} ${this.lastName}.`);
        });
    }

    createTeacher();
};
