function dropdownmenu(){
	document.getElementById('menu').classList.toggle('show');
}
window.onclick = function(event){
	if (!event.target.matches('.menu-div')) {
		var i;
		var dropdowns = document.getElementByClassName('menu-content');
		for ( i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
			
		}
	}
}