import Interaction from './modules/interaction.js';

let interaction = new Interaction(['.item-interaction_like', '.item-interaction_comment']);
interaction.setActive();

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.materialboxed');
	var instances = M.Materialbox.init(elems);
 });

 