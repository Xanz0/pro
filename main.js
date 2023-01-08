




const elForm = document.querySelector('form');
const elList = document.querySelector('#todo-list');
const elError = document.querySelector('#error');
const elReset = document.querySelector('#reset');
const elSpan= document.querySelector('#span');
const elFoot= document.querySelector('#foot');
const products = [];


	function renderTodos(array, parent = elList) {
		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			const li = document.createElement('li');
			li.textContent = element;
			li.className = 'rounded-2 ps-3 shadow bg-light mt-2';
			parent.appendChild(li);
			let count=array.length;
			elSpan.textContent="You have " + products.length + " lists";
		}
	}
	
	
	renderTodos(products);
	
	elForm.addEventListener('submit', function (evt) {
		evt.preventDefault();
		// add to array
		const input = evt.target.input;
		if (input.value !== '') {
			products.push(input.value);
		} else {
			elError.textContent = 'Please enter a todo';
		}
		console.log(products);
	
		// render array
		elList.textContent = null;
		renderTodos(products);
	
		input.value = null;
	});
	
	elReset.addEventListener('click', function () {
		elList.textContent = null;
		elSpan.textContent="You have " +0 + " lists";
	});
	
	if (elError.textContent === '') {
		elError.textContent = 'No todos yet';
	}
	
	

	
	 
	
	




