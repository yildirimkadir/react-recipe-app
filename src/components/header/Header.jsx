import HeaderStyle, {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setSearch, setMeal, menu, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe-App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setMeal(e.target.value)}
        >
          {menu?.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </Select>
        <FoodInput
          type="text"
          placeholder="Search something"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Search</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
