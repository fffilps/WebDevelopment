function validUserNames(str) {
   const newArray = str.filter(n => {
       return n.length < 10;
   });
   return newArray;
}
