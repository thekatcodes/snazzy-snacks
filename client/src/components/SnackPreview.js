import React, { useEffect, useState } from "react";
import axios from "axios";

// import CheckoutForm from "./CheckoutForm";
import Button from "./Button";


import "./styles/SnackPreview.scss";
// import classNames from "classnames";

export default function SnackPreview(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	// console.log(products);

	let priceId;

	const productList = products.map((item) => {
		if (item.tier === props.tier) {
            if (item.tier === 20) {
                priceId = "price_1MncSlGdWagE6Ui8ya3zUfDR";
            } else if (item.tier === 40) {
                priceId = "price_1MncT2GdWagE6Ui89i2sgMdO";
            } else if (item.tier === 60) {
                priceId = 'price_1MncTLGdWagE6Ui8Q4pi6t4j';
            }
            return (
                <div className="product">
					<img
						src={item.img_url}
						alt={item.name}
                        />
					<p>{item.name}</p>
				</div>
			);
		}
	});
    
    // console.log('PRICE ID PLS', priceId)
    //tier 1: price_1MncSlGdWagE6Ui8ya3zUfDR
    //tier 2: price_1MncT2GdWagE6Ui89i2sgMdO
    //tier 3: price_1MncTLGdWagE6Ui8Q4pi6t4j

	return (
		<section className="layout preview-layout">
			<div className="disclaimer">
				<h3>Preview</h3>
				<div>
					You will receive a{" "}
					<strong>
						<em>random assortment</em>
					</strong>{" "}
					of snacks from the list below based on the{" "}
					<strong>
						<em>selected tier</em>
					</strong>
				</div>
			</div>
			<div className="product-scroller">{productList}</div>
            <form action="/create-checkout-session" method="POST">
                <input type="hidden" name="priceId" value={priceId} />
                <Button orangy type="submit">
                    Continue
                </Button>
            </form>
		</section>
	);
}
