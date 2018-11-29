let _makeHtmlMenu = ({
   id,
   name,
   description,
}) => {
let $menu = $(`<div class="col-sm-6">`);

 $menu.append($(`<button class="menu-description" data-menu-id="${id}">`).text(name));
 return $menu;
};


module.exports = _makeHtmlMenu;

