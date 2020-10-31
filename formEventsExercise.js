// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass

const form = document.querySelector('form');

const list= document.querySelector("#list");
 
form.addEventListener('submit', function(e){
    e.preventDefault();
    const li= document.createElement('li');
    li.innerText = (form.elements.qty.value + form.elements.product.value);
    list.appendChild(li);
    form.elements.qty.value= "";
    form.elements.product.value ="";
});
