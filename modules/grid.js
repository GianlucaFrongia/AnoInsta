class Grid {
	constructor(){

	}


	init(){
		var grid = new Muuri('.grid', {
			items: '.item-container',
			layout: {
			  /*
				* Definiert wie die Drops angeordnet werden
				*/
			  fillGaps: false,
			  /**
				* @type {boolean}
				* Platziert die Drops im ersten verfügbaren Raum
				*/
			  horizontal: false,
			  /**
				* @type {boolean} */
			  /* Hier werden die Animation beim Bewegen von den Drops definiert.
				*  Mehr option gibt es unter https://github.com/haltu/muuri
				*/
			  layoutDuration: 400,
			  layoutEasing: 'ease',
			},
			itemVisibleClass: 'item-shown',
			itemHiddenClass: 'item-hidden',
		 });	
		 return grid;
		}
}

export default Grid;