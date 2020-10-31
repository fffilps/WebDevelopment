// DEFINE YOUR FUNCTION BELOW:
const days = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"};
function returnDay(numb) {
    if (numb < 1 || numb > 7) {
        return null;
    }
    let day = Object.values(days);
    return day[numb - 1];
    
}
