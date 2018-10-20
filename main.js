import Interaction from './modules/interaction.js';

let interaction = new Interaction(['.item-interaction_like', '.item-interaction_comment']);
interaction.setActive();

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
	console.log(elems);
	
	var instance = M.FloatingActionButton.getInstance(elems[0]);
	instance.open();
 });

