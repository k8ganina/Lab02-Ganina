let _makeHtmlMenu = ({
   id,
   name,
   description,
}) => {
let $menu = $(`<div class="col-sm-6">`);
// $menu.append($(`<span class="menu-title">`).text(name));
 $menu.append($(`<button class="menu-description" data-menu-id="${id}">`).text(name));

 //$('#menu-description').click(function() {
	//	alert("uueee");
		//win = window.open("window.htm","win","height=300,width=300");
	//});
 return $menu;
};


module.exports = _makeHtmlMenu;

