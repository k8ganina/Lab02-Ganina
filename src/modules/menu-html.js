let _makeHtmlMenu = ({
   id,
   name,
   description,
}) => {
let $menu = $(`<div class="col-sm-6" data-menu-id="${id}">`);
// $menu.append($(`<span class="menu-title">`).text(name));
 $menu.append($(`<span class="menu-description">`).text(description));
 return $menu;
}
module.exports = _makeHtmlMenu;
//button.onclick = function(){
	//win = window.open("window.htm","win","height=300,width=300");
//}
