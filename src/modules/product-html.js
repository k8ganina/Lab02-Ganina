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
	$product.append($(`<span class="product-price">`).addClass((special_price!=null)?"crossed":"").text(price));
	
	if (special_price!=null) {
		$product.append($(`<span class="special-product-price">`).text(special_price));
	}
	$product.append($(`<img src="https://st.depositphotos.com/2518853/3153/v/950/depositphotos_31537851-stock-illustration-vector-supermarket-cart.jpg" class="btn-add-to-cart">`));

    $(function() {
      $('.product-image').click(function(){
        $('.product-info').fadeIn();
      });
    }); //під час натиснення на зображення товару вилазить віконечно, в якому має бути детальний опис товару

	return $product;
};
module.exports = _makeHtml;

