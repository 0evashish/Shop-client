import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
		url("https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%; // making the input fields expandable dynamivcally
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Create An Account</Title>
				<Form>
					<Input placeholder="First Name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Input placeholder="Confirm Password" />
					<Agreement>
						By Creating an account, I consent to The Proccessing of my personal
						data in Accordance with the <b>Privacy Policy</b>
					</Agreement>
					<Button>Create</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
