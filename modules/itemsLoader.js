class ItemsLoader {
	constructor(api){
		this.api = api;
	}

	/* 
	* Hier ist das Template für ein Card.
	* Anhand vom Count generiert er diese und fügt sie auf der Seite hinzu
	*/
	loadTemplate(count = 3){
		const wrapper = document.querySelector('.items-wrapper');
		let template = `
		<section class="card-panel item-container" data-id="">
		<header class="item-header">
			<h4 class="item-header_title"></h4>
			<span class="item-header_user">User</span>
		</header>

		<picture class="item-picture">
			<source class="item-picture_source" srcset="" media="(max-width: 600px)">
			<img class="item-picture_img materialboxed" src="" alt="MDN">
		</picture>
		<div class="item-interaction">
			<a class="item-interaction_like btn-floating btn-medium waves-effect waves-light"><i class="material-icons">favorite_border</i></a>
		</div>
	</section>
		`;
		
		for (let i = 0; i <= count - 1 ; i++) {
			wrapper.insertAdjacentHTML('afterbegin', template);
		}		
	}

	/*
	* Füllt die Cards mit Content ahand der API
	*/
	loadHeader(item){
		let container = document.querySelectorAll('.item-container');
		let title = document.querySelectorAll('.item-header_title');
		let user = document.querySelectorAll('.item-header_user');
		let img = document.querySelectorAll('.item-picture_img');
		let source = document.querySelectorAll('.item-picture_source');



		item.then(e => {	
			for (let i = 0; i < e.length; i++) {
				container[i].dataset.id = e[i].id;
				title[i].textContent = e[i].title;
				user[i].textContent = e[i].id;
				img[i].src = e[i].url;
				source[i].srcset = e[i].thumbnailUrl;
	
			}
		});
	}

	/*
	* Pagination vorwärts wo die Items hinzufügt
	*/
	loadNextItems(){
		let next = document.querySelector('.pagination-next');
		let pages = document.querySelectorAll('.pagination-page');
		let before = document.querySelector('.pagination-before');
		
		next.addEventListener('click', (e) => {
			e.stopPropagation;
			
			let active = document.querySelector('.pagination > .active');				
			let nextPage = active.nextElementSibling;
			let val = parseInt(active.dataset.page);	
			if(val >= 1){
				before.classList.remove('disabled');
			} 
			active.classList.remove('active');	
			nextPage.classList.add('active');
		}, false);
	}


	/*
	* Pagination ruckwärts wo die Items hinzufügt
	*/
	loadPreviousItems(){
		let before = document.querySelector('.pagination-before');

		before.addEventListener('click', (e) => {
			e.stopPropagation;
			let active = document.querySelector('.pagination > .active');
			let previousPage = active.previousElementSibling;
			let val = parseInt(previousPage.textContent);			
			let x = parseInt(active.textContent);
				
			if (!e.currentTarget.classList.contains('disabled') && x-1 === 1 ) {
				before.classList.add('disabled');
				active.classList.remove('active');	
				previousPage.classList.add('active');
			}	else if(val >= 1) {
				active.classList.remove('active');	
				previousPage.classList.add('active');
			}
			
		}, false);
	}
}

export default ItemsLoader;