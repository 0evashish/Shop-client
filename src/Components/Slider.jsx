import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { styled } from "styled-components";
import { sliderItems } from "../pages/data";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 100vh; // full screen slider
	display: flex;
	// FOR ARROW TO BE POSITIONED CORRECTLY
	position: relative;
	// to maintain side scrolling
	overflow: hidden;
	${mobile({ display: "none" })}
`;

// we want this arrow to be centred in the screen
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: whitesmoke;
	border-radius: 50%;
	// aligning the matrial icon inside
	display: flex;
	align-items: center;
	justify-content: center;
	// aligning them in screen  // left right overlap but
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	// CONDITIONAL porps.
	// now styled component has a good feature of getting props.
	// there we can conditionally style them using a single styled container.
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	opacity: 0.6;
	z-index: 2;
`;
// what will contain our photos.
const Wrapper = styled.div`
	height: 100%;
	display: flex; // makes the slide div horizontal.
	transition: all 1.1s ease;
	transform: translateX(
		${(prop) => prop.slideIndexProp * -100}vw
	); // now for horizontal movement we'll use this tranform
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
	// bg = "fff3b0"e09f3e"eff1f3"
`;
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`;
const Image = styled.img`
	height: 75%;
`;

const InfoContainer = styled.div`
	flex: 1;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 35px 0px; // topBottom LeftRight
	font-weight: 500;
	font-size: 20px;
	letter-spacing: 2.5px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	border-radius: 0px;
	border-width: 0.5px;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	// for slider we'll change transform from 0 to -100 -200 0 translate x
	const handleCLick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	// we'll map the slider items insider wrapper.
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleCLick("left")}>
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper slideIndexProp={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img}></Image>
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>Explore More!</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>

			<Arrow direction="right" onClick={() => handleCLick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};
// NEW THING ON ID ONLY ON IS ENOUGH SEE SLIDE.
export default Slider;
