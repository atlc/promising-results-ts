// Iterates through all the slowMath instructions using Promise/then, placing the output in the console.

slowMath.add(6,2)
.then((res) => {
    console.log(`The result of adding the first two values is: ${res}`);
    return slowMath.multiply(res, 2);
})
.then((res) => { 
    console.log(`The result of multiplying is ${res}`);
    return slowMath.divide(res, 4);
})
.then((res) => { 
    console.log(`The result of dividing is ${res}`);
    return slowMath.subtract(res, 3);
})
.then((res) => { 
    console.log(`The result of subtracting is ${res}`);
    return slowMath.add(res, 98);
})
.then((res) => { 
    console.log(`The sum of adding is ${res}`);
    return slowMath.remainder(res, 2);
})
.then((res) => { 
    console.log(`The remainder of dividing is ${res}`);
    return slowMath.multiply(res, 50);
})
.then((res) => { 
    console.log(`The product of multiplying is ${res}`);
    return slowMath.remainder(res, 40);
})
.then((res) => { 
    console.log(`The remainder after dividing is ${res}`);
    return slowMath.add(res, 32);
})
.then((res) => console.log(`%cThe final result is: ${res}`, 'background-color: black; color: white; font-weight: bold'))
.catch((err: Error) => console.error(`An error has occured.\n${err}`));


// Iterates through the slowMath instructions, using async/await. Places output in a Swal modal, where exiting is disabled until
//   the doMath() function successfully finishes

async function doMath() {
    try {
        let num: number = await slowMath.add(6,2);
        updateResults(`The result of adding the first two values is: <b>${num}</b>`);
        num = await slowMath.multiply(num, 2)
        updateResults(`The result after multiplying is: <b>${num}</b>`);
        num = await slowMath.divide(num, 4);
        updateResults(`The result after dividing is: <b>${num}</b>`);
        num = await slowMath.subtract(num, 3)
        updateResults(`The result after subtracting is: <b>${num}</b>`);
        num = await slowMath.add(num, 98);
        updateResults(`The sum after adding is: <b>${num}</b>`);
        num = await slowMath.remainder(num, 2);
        updateResults(`The remainder after dividing is: <b>${num}</b>`);
        num = await slowMath.multiply(num, 50);
        updateResults(`The product after multiplying is: <b>${num}</b>`);
        num = await slowMath.remainder(num, 40);
        updateResults(`The remainder after dividing is: <b>${num}</b>`);
        num = await slowMath.add(num, 32);
        updateResults(`The final result is: <b style="font-size: 1.5em">${num}</b>`);
        finishUpdates();
    } catch (err) {
        console.error(err);
    }
}

doMath();

declare let Swal: any;
let resultsContent: string = ''; 

const mathResultsModal = Swal.fire({
    title: "slowMath results",
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false
});

function updateResults(result: string) {
    Swal.hideLoading();
    resultsContent += `<br />${result}`;
    Swal.update({html: resultsContent});
    Swal.showLoading();
}

function finishUpdates() {
    Swal.hideLoading();
    mathResultsModal.update({
        icon: 'success',
        allowOutsideClick: true,
        allowEscapeKey: true,
    });
}
