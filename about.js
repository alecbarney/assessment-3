console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted');
}

let rubberDuck = document.querySelector("#duck")

rubberDuck.addEventListener('mouseover', ()=> {
	alert('you are sexy as hell.')
})


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);