import styled from "styled-components"
import { categories } from "../pages/data"
import Categoryitem from "./Categoryitem"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

// since we are going to have 3 categories therefore category
// items in a different component
// we'll map to our arrayof categories 
// and pass(prop) the item out to categoryitem to display accordingly
const Categories = () => {
  return (
    <Container>
        {categories.map((itemMapped) => (
            <Categoryitem itemP = {itemMapped} key = {itemMapped.id}/>
        ))}
    </Container>
  )
}

export default Categories