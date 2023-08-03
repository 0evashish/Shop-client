import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	padding: 0.4%;
	${mobile({ display: "none" })}
`;

const Announcement = () => {
	return (
		<Container>Special Summer Sale! Free Shipping ON EVERYTHING</Container>
	);
};

export default Announcement;
