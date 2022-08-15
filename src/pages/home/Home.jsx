import { useEffect, useState } from "react";
import HomeStyle from "./Home.style";
import Header from "../../components/header/Header";
import axios from "axios";
const Home = () => {
  const menu = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [search, setSearch] = useState(menu[0]);
  const [meal, setMeal] = useState("breakfast");
  const [info, setInfo] = useState([]);

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

  return (
    <div>
      <Header
        setSearch={setSearch}
        setMeal={setMeal}
        menu={menu}
        getData={getData}
      />
    </div>
  );
};

export default Home;
