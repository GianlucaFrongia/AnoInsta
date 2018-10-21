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
let interaction = new Interaction(['.item-container-interaction_like']);
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


/*;*/


let input = document.querySelector('#search');
input.onkeyup = keyup;
let inputTextValue;

function keyup(e) {
	inputTextValue = e.target.value;
	let items = gridI.getItems();
	if(inputTextValue){
		gridI.filter(function (item) {
			console.log(item.getElement().getAttribute('data-id'));
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
	var elems = document.querySelectorAll('.materialboxed');
	var instances = M.Materialbox.init(elems);
});


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
