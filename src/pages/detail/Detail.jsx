import React from "react";
import {
  DetailContainer,
  HeaderContainer,
  DetailPart,
  OtherPart,
  ImgContainer,
  IngContainer,
} from "./Detail.style";
import dietSvg from "../../assets/diet.svg";
import defaultImage from "../../assets/default-image.jpg";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.recipe.label}</h1>
        <img src={dietSvg} alt="dietImg" />
      </HeaderContainer>
      <DetailPart wrap="wrap">
        <OtherPart>
          <h4>NUTRIENTS</h4>
          <p>
            {state.recipe.totalNutrients.CA.label} :{" "}
            {Math.round(state.recipe.totalNutrients.CA.quantity)}
            {state.recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {state.recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.recipe.totalNutrients.CHOCDF.quantity)}
            {state.recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.recipe.totalNutrients.CHOLE.quantity)}
            {state.recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.recipe.totalNutrients.ENERC_KCAL.quantity)}
            {state.recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.recipe.totalWeight}</p>
          <p>Calories: {Math.round(state.recipe.calories)}</p>
          {state.recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>

        <ImgContainer>
          <img
            src={state.recipe.image || defaultImage}
            alt={state.recipe.label}
          />
        </ImgContainer>

        <IngContainer>
          {state.recipe.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} - {line}
              </p>
              <br />
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
