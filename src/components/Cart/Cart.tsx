import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

function Cart() {
	const cartItems = useSelector((state: any) => state.cart.items);
	const cartTotal = useSelector((state: any) => state.cart.totalBill);

	return (
		<div className="d-flex flex-column">
			<Navbar />
			<h1 className="heading">My Cart</h1>
			<div className="container cart-items">
				{cartItems.map((item: any) => {
					return (
						<div className="cart-item flex-row  justify-content-between d-flex">
							<p className="item-details">{item.title}</p>
							<p className="item-details">{item.quantity}</p>
							<p className="item-details">{item.price * item.quantity}</p>
						</div>
					);
				})}
			</div>
			<div className="container grand-total">
				<div className="total-item flex-row justify-content-between d-flex">
					<p className="item-details fin">Grand Total</p>
					<p className="item-details fin">{cartTotal}</p>
				</div>
			</div>
		</div>
	);
}

export default Cart;
