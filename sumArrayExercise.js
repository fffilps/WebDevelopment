// DEFINE YOUR FUNCTION BELOW:
function sumArray(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        let addNumber = parseInt(array[i]);
        total += addNumber;
    }
    return total;
}
