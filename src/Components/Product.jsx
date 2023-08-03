import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Info = styled.div`
	// since intitally we want the search icons to be hidden unless hovered
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.05);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
	transition: all 0.3s ease;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	// centreing the items
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fdfb;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 220px;
	height: 220px;
	border-radius: 50%;
	background-color: #d5ffff;
	opacity: 30%;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	cursor: pointer;
	// hover effect introduciton
	transition: all 0.3s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.2);
	}
`;

// continer will have a bg color and that inside we'll have a circle to make more fancy
const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`}>
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
