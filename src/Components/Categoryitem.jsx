import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

// how to move info on the image ?
// use position absolute on whatr you wanna move (child)
// and make the on which we want relative(parent)

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover; // crop Images accordingly to height
	${mobile({ height: "20vh" })}
`;
const Info = styled.div`
	position: absolute;
	left: 0;
	top: 0; // CONTAINER KE TOP LEFT SE
	width: 100%;
	height: 100%; // BASICALLY 100 percent of container.
	// how to center ?
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column; // since horizontal before
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: grey;
	cursor: pointer;
	font-weight: 600;
`;

const Categoryitem = ({ itemP }) => {
	return (
		<Container>
			<Link to={`/products/${itemP.cat}`}>
				<Image src={itemP.img} />
				<Info>
					<Title>{itemP.title}</Title>
					<Button> SHOP NOW </Button>
				</Info>
			</Link>
		</Container>
	);
};

export default Categoryitem;
