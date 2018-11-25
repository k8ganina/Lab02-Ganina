let _makeHtml = ({
	id,
	name,
	image_url,
	description,
	price,
	special_price,
}) => {
	let $product = $(`<div class="card col-xs-12 col-sm-4 col-md-3" data-product-id="${id}">`);
	$product.append($(`<img src="${image_url}" alt="${name, price, special_price}" class="img-fluid product-image">`));
	$product.append($(`<span class="product-title">`).text(name));
	$product.append($(`<span class="product-price">`).text(price));
	$product.append($(`<span class="special-product-price">`).text(special_price));
	//$product.append($(`button class="btn-add-to-cart">`));
	return $product;
};

module.exports = _makeHtml;