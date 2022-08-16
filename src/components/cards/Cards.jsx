import CardsStyle, {
  Card,
  Header,
  MainContainer,
  Image,
  Button,
} from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ info }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {info?.map((item, index) => {
        const {
          recipe: { label, image },
        } = item;
        return (
          <Card key={index}>
            <Header>{label}</Header>
            <Image src={image} />
            <Button
              onClick={() =>
                navigate("/detail", { state: item, replace: false })
              }
            >
              Show More
            </Button>
          </Card>
        );
      })}
      ;
    </MainContainer>
  );
};

export default Cards;
