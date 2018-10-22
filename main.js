'use strict';
import Interaction from './modules/interaction.js';
import ItemsLoader from './modules/itemsLoader.js';
import GetApi from './modules/getApi.js';
import Grid from './modules/grid.js';

/*
* Init der Module
*/
let api = new GetApi('http://jsonplaceholder.typicode.com/photos?_start=10&_limit=10');
let call = api.getItems();

let itemsLoader = new ItemsLoader();
let interaction = new Interaction(['.item-interaction_like']);
let grid = new Grid();


/*
* Methoden aufrufe
*/
itemsLoader.loadTemplate(10);
itemsLoader.loadHeader(call);
itemsLoader.loadNextItems();
itemsLoader.loadPreviousItems();

interaction.setActive();

var gridI = grid.init();

gridI.refreshItems().layout();


/* Die Such und Filter Funktion */
let input = document.querySelector('#search');
/* Onkey Up Event beim Input Field */
input.onkeyup = keyup;
let inputTextValue;

function keyup(e) {
	inputTextValue = e.target.value;
	/* Hold Items des Grids */
	let items = gridI.getItems();
	if(inputTextValue){
		gridI.filter(function (item) {
			/* Vergleicht den Item Attribute (data-id) mit dem Inpute Search Value */
			return item.getElement().getAttribute('data-id') == inputTextValue;
		 });
	} else {
		gridI.show(items);

	}
	
 }
/*
* Material CSS Inits
*/

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'left',
		hoverEnabled: false	
	});	
	var instance = M.FloatingActionButton.getInstance(elems[0]);
	instance.open();
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
 });
