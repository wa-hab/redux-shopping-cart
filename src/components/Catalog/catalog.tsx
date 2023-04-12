import "./catalog.css";
import ProductThumbnail from "../ProductThumbnail/productThumbnail";
import { ProductThumbnailProps, allFood, ProductCategory } from "../../data";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";

function Catalog() {
    const dispatch = useDispatch();

	return (
		<>
			<Navbar></Navbar>
			<div className="p-4 all-products">
				{allFood.map((food: ProductCategory) => {
					return (
						<div className="container cont  mb-4">
							<p className="d-flex cat">{food.category}</p>
							<div className="row category">
								{food.products.map((Chocolate: ProductThumbnailProps) => {
									return (
										<>
											<ProductThumbnail
												productPrice={Chocolate.productPrice}
												productName={Chocolate.productName}
												productImage={Chocolate.productImage}
											></ProductThumbnail>
										</>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Catalog;
