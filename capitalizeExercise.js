// DEFINE YOUR FUNCTION BELOW:
function capitalize(input) {
    let firstL = input.slice(0,1);
    let backEnd = input.slice(1, input.length)
    let cap = firstL.toUpperCase();
    return cap + backEnd;
}
