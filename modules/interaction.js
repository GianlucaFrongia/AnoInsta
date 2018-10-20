class Interaction {
	constructor(items) {
		this.items = items;
	}

	setActive(){
		var item = this.items.map(el => {
			return document.querySelectorAll(el);
		});
		
		for (const key in item) {

			item[key].forEach(element => {							
				element.addEventListener('click', function (e) {
					e.stopPropagation();		
					addActive(e);
				}, false);
			});
		}
		
		function addActive(e){
			
			e.currentTarget.classList.toggle('--active');
		}		
	}
	
}

export default Interaction;