import styled from "styled-components";
import { FlexStyle } from "../../components/globalStyles/Flex.style";

export const LoginContainer = styled(FlexStyle)`
  height: 100vh;
  /* background-image: url("https://barcelonadesignshop.com/wp-content/uploads/2018/11/meat-steak-food-menu-template-restaurant-gourmet-psd.jpg"); */
  background-image: url("https://barcelonadesignshop.com/wp-content/uploads/2018/11/food-menu-template-restaurant-free-psd-1.jpg");
  /* opacity: 0.7; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(FlexStyle)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  /* background-image: url("https://st3.depositphotos.com/1267918/12612/v/950/depositphotos_126120942-stock-illustration-restaurant-menu-card-design.jpg"); */
  background: rgba(0, 173, 181, 0.7);
  background-size: cover;
  background-position: center;
  border-radius: 25%;
  border: 5px solid black;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: black;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;
