import { useEffect, useState } from "react";
import HomeStyle, { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import Header from "../../components/header/Header";
import axios from "axios";
import img from "../../assets/home.svg";
import Cards from "../../components/cards/Cards";
const Home = () => {
  const menu = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState(menu[1]);
  const [info, setInfo] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (search) {
      try {
        const { data } = await axios.get(url);
        setInfo(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter you something in searchbox");
    }
  };

  console.log(info);
  console.log(meal);

  return (
    <div>
      <Header
        setSearch={setSearch}
        meal={meal}
        setMeal={setMeal}
        menu={menu}
        getData={getData}
      />
      {!info && (
        <ImgDiv>
          <HomeImg src={img} />
        </ImgDiv>
      )}

      {info?.length === 0 && (
        <HeaderText>There is no result. Please try again</HeaderText>
      )}
      {info?.length > 0 && <Cards info={info} />}
    </div>
  );
};

export default Home;
