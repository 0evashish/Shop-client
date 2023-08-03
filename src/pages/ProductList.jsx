import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products"; // main products are here
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin: 10px;
	${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
	border-radius: 0%;
	padding: 6px;
	margin: 2px;
	${mobile({ margin: "2px 0px" })}
`;

const Option = styled.option`
	border-radius: 0px;
	padding: 5px;
`;

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	// when we'll use the drop downs
	// we'll create a object and use values inside that object
	// using a use state hook
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilter = (catEvent) => {
		const value = catEvent.target.value;

		// Check if the selected option is "color"
		if (catEvent.target.name === "color" && value === "color") {
			// If "color" is selected, don't apply any filtering
			// You can reset the filter for the "color" property here
			setFilters({
				...filters,
				color: "", // Reset the color filter to an empty string
			});
		} else {
			// If any other option is selected, apply filtering as usual
			setFilters({
				...filters,
				[catEvent.target.name]: value,
			});
		}
	};
	// whenever we'll change the drop down size or color
	// we'll use usestate hook
	// console.log(filters);
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>{cat}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name="color" onChange={handleFilter}>
						<Option>color</Option>
						<Option>white</Option>
						<Option>red</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
						<Option>black</Option>
					</Select>
					<Select name="size" onChange={handleFilter}>
						<Option>size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
						<Option>XXL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products: </FilterText>
					<Select
						name="size"
						onChange={(sortEvent) => setSort(sortEvent.target.value)}
					>
						<Option value="newest">Newest</Option>
						<Option value="asc">Lowest First</Option>
						<Option value="des">Highest First</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products cat={cat} filters={filters} sort={sort} />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
