import {
	GitHub,
	Instagram,
	LinkedIn,
	MailOutline,
	Phone,
	Room,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
	cursor: pointer;
`;

const Centre = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	// delete margin and padding since ul has its own m and p
	margin: 0;
	padding: 0;
	list-style: none; // clearing defaults
	display: flex;
	flex-wrap: wrap; // it needs a width to be wrapped around
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
	padding: 2px;
	width: 40%;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	justify-content: center;
	align-items: center;
	color: white;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Artrivate.</Logo>
				<Desc>
					{" "}
					A art website that you can trust, that is pure. Trying to put the best
					out there in front of everyone.
				</Desc>
				<SocialContainer>
					<SocialIcon color="E4405F" style={{ alignContent: Centre }}>
						<StyledLink to={"https://www.instagram.com/dexashish/"}>
							<Instagram />
						</StyledLink>
					</SocialIcon>
					<SocialIcon color="171515">
						<StyledLink to={"https://github.com/0evashish"}>
							<GitHub />
						</StyledLink>
					</SocialIcon>
					<SocialIcon color="00acee">
						<StyledLink to={"https://twitter.com/Dexashish"}>
							<Twitter />
						</StyledLink>
					</SocialIcon>
					<SocialIcon color="0A66C2">
						<StyledLink to={"https://www.linkedin.com/in/dexashish/"}>
							<LinkedIn />
						</StyledLink>
					</SocialIcon>
				</SocialContainer>
			</Left>

			<Centre>
				<Title>Useful Links</Title>
				<List>
					<ListItem>
						<Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
							Home
						</Link>
					</ListItem>
					<ListItem>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to={"/cart"}
						>
							Cart
						</Link>
					</ListItem>
					<ListItem>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to={"/products/men"}
						>
							Men Fashion
						</Link>
					</ListItem>
					<ListItem>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to={"/products/women"}
						>
							Women Fashion
						</Link>
					</ListItem>
					<ListItem>
						<Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
							My Account
						</Link>
					</ListItem>
					<ListItem>
						<Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
							Order Tracking
						</Link>
					</ListItem>
					<ListItem>
						<Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
							Wishlist
						</Link>
					</ListItem>
					<ListItem>
						<Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
							Terms
						</Link>
					</ListItem>
				</List>
			</Centre>

			<Right>
				<Title>Contact Us</Title>
				<ContactItem>
					<Room style={{ marginRight: "12px" }} />
					MNIT Jaipur
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} />
					+91 99999-99999
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} />
					contact@devashish.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
			</Right>
		</Container>
	);
};

export default Footer;
