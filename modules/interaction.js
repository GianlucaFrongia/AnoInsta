class Interaction {
	constructor(items) {
		this.items = items;
	}

	setActive(){
		var item = this.items.map(el => {
			return document.querySelector(el);
		});		
		item.forEach(element => {				
			element.addEventListener('click', function (params) {
				params.stopPropagation();
				this.classList.toggle('--active');				
			}, false);
		});
	}
	
}

export default Interaction;