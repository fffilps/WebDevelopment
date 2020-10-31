function allEvens(num) {
    if (num.every(x => x % 2 === 0)) {
        return true;
    }else {
        return false;
    }
}
