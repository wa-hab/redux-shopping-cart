import "./productThumbnail.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { useState } from "react";

export interface ProductThumbnailProps {
	productName: string;
	productImage: string;
	productPrice: number;
}

function ProductThumbnail({
	productName,
	productImage,
	productPrice,
}: ProductThumbnailProps) {
	const cartItems = useSelector((state: any) => state.cart.items);

	const [quantity, setQuantity] = useState<number>(() => {
		const item = cartItems.find((item: any) => item.title === productName);
		if (item) {
			return item.quantity;
		}
		return 0;
	});
	const dispatch = useDispatch();

	return (
		<>
			<div className="col d-flex product-thumbnail">
				<img
					src={productImage}
					className="img-thumbnail product-images rounded mt-4 mb-2"
					alt="product"
				></img>
				<p className="promo p-name pull-left">{productName}</p>
				<div className="promo qty-group">
					<button
						className="plus-button"
						onClick={() => {
							dispatch(
								addToCart({
									title: productName,
									quantity: 1,
									price: productPrice,
								})
							);
							setQuantity((prevQuantity: number) => prevQuantity + 1);
						}}
					>
						+
					</button>
					<span className="quant">{quantity}</span>
					<button
						className="minus-button"
						onClick={() => {
                            if (quantity === 0) {
                                return;
                            }

							dispatch(removeFromCart({ title : productName }));

							setQuantity((prevQuantity: number) => prevQuantity - 1);
						}}
					>
						-
					</button>
				</div>
				<p className="promo pull-left">$ {productPrice}.00</p>
			</div>
		</>
	);
}
export default ProductThumbnail;
