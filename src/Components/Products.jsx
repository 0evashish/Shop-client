import styled from "styled-components";
// import { popularProducts } from "../pages/data";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap; // TO MAKE PRODUCTS WRAP AROUND DOWNWARDS
	justify-content: space-between;
`;

// same concept like the categories and categories items.
const Products = ({ cat, filters, sort }) => {
	// fetching data from props console.log(cat, filters, sort);
	const [products, setProducts] = useState([]);
	// axios used for fetching data
	const [filteredProducts, setfilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat
						? `http://localhost:5000/api/products?category=${cat}`
						: "http://localhost:5000/api/products"
				);
				// console.log(res);
				setProducts(res.data);
			} catch (err) {}
		};
		getProducts();
	}, [cat]); // THIS MEANS WHENEVER CAT CHANGES JUST RUN THIS

	useEffect(() => {
		cat &&
			setfilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, cat, filters]); // AHEAD THESE ARE DEPENDENCIES

	useEffect(() => {
		if (sort === "newest") {
			//  sorting accoording to created at date
			setfilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setfilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setfilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{cat
				? filteredProducts.map((item) => <Product key={item.id} item={item} />)
				: products
						.slice(0, 8)
						.map((item) => <Product key={item.id} item={item} />)}
		</Container>
	);
};

export default Products;
