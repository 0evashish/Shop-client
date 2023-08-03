import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

// for navbar to be inside
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({ padding: "10px 0px" })}
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 9px;
	border-radius: 0px;
	${mobile({ height: "11px" })}
`;

const Input = styled.input`
	border: none;
	font-weight: 500;
	${mobile({ width: "50px", height: "11px" })}
	&:focus {
		outline-width: 0px;
	}
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "18px", marginLeft: "28px" })}
`;

const Centre = styled.div`
	flex: 1;
	text-align: center;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	justify-content: center;
	align-items: center;
	color: black;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>

				<Centre>
					<StyledLink to="/">
						<Logo>Artrivate.</Logo>
					</StyledLink>
				</Centre>

				<Right>
					<StyledLink to={"/register"}>
						<MenuItem>Register</MenuItem>
					</StyledLink>
					<StyledLink to={"/login"}>
						<MenuItem>Sign In</MenuItem>
					</StyledLink>

					<StyledLink to="/cart">
						<MenuItem>
							<Badge
								overlap="rectangular"
								badgeContent={quantity}
								color="primary"
							>
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</StyledLink>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
