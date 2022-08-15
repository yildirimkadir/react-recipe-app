import HeaderStyle, {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe-App</MainHeader>
      <FormContainer>
        <FoodInput />
        <Button>Search</Button>
        <Select></Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
