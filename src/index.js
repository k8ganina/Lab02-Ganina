console.log('Hello!');
console.log(`The time is ${new Date()}`);
import './scss/main.scss';


import $ from 'jquery';
window.jQuery = $;
window.$ = $;


let _makeProduct = require('./modules/product-html');

jQuery.ajax({
	url: 'https://nit.tron.net.ua/api/product/list',
	method: 'get',
	dataType: 'json',
	success: function(json){
		console.log('Loaded via AJAX!');
		// console.log(json);
		console.table(json);

		json.forEach(product => $('.product-grid').append(_makeProduct(product)));
		console.log('Added to grid');
	},
	error: function(xhr){
		alert("An error occured: " + xhr.status + " " + xhr.statusText);
	},
});
console.log('After AJAX');

let _makeMenu = require('./modules/menu-html');

jQuery.ajax({
	url: 'https://nit.tron.net.ua/api/category/list',
	method: 'get',
	dataType: 'json',
	success: function(json){
		console.log('Menu via AJAX');
		console.table(json);

		json.forEach(menu => $('.menu-grid').append(_makeMenu(menu)));
		console.log('Menu added to drid');
	},
	error: function(xhr){
		alert("An error occured: " + xhr.status + " " + xhr.statusText);
	},
});
