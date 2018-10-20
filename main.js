import Interaction from './modules/interaction.js';
import ItemsLoader from './modules/itemsLoader.js';
import GetApi from './modules/getApi.js';

/*
* Init der Module
*/
let api = new GetApi('http://jsonplaceholder.typicode.com/photos?_start=10&_limit=10');
let call = api.getItems();

let itemsLoader = new ItemsLoader();
let interaction = new Interaction(['.item-interaction_like', '.item-interaction_comment']);


/*
* Methoden aufrufe
*/
itemsLoader.loadTemplate(3);
itemsLoader.loadHeader(call);
itemsLoader.loadNextItems();
itemsLoader.loadPreviousItems();

interaction.setActive();


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
