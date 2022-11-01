import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const gin = require("./img/gin.png");
const brandy = require("./img/brandy.png");
const rum = require("./img/rum.png");
const beer = require("./img/beer.png");
const hardSeltzer = require("./img/hardSeltzer.png");
const redWine = require("./img/redWine.png");
const tequila = require("./img/tequila.png");
const vodka = require("./img/vodka.png");
const whiskey = require("./img/whiskey.png");
const whiteWine = require("./img/whiteWine.png");

const divStyle = {
  margin: "40px",
  height: "80vh",
  border: "15px solid #fda0d8",
};
const pStyle = {
  margin: "10px",

  textAlign: "center",
  fontFamily: "Chalkduster",
};

const pageStyle = {
  backgroundColor: "pink",
};

const buttonStyle = {
  fontFamily: "Chalkduster",
  fontSize: "10px",
  border: "2px solid #fda0d8",
};

const carouselStyle = {
  margin: "10px",
  border: "3px solid #fda0d8",
  borderRadius: "10px",
};

const imgStyle = {
  width: "80px",
  height: "120px",
};
function Example(props) {
  var items = [
    {
      name: "Gin",
      taste: "Bitter taste",
      percent: "35% - 55%",
      image: gin,
    },
    {
      name: "Vodka",
      taste: "Bitter taste",
      percent: "40%",
      image: vodka,
    },
    {
      name: "Whiskey",
      taste: "Bittersweet",
      percent: "40%-50%",
      image: whiskey,
    },
    {
      name: "Rum",
      taste: "Sweet",
      percent: "40% - 75.5%",
      image: rum,
    },
    {
      name: "Tequila",
      taste: "Sweet",
      percent: "40%",
      image: tequila,
    },
    {
      name: "Hard Seltzer",
      taste: "Sweet/fruity",
      percent: "4%-8%",
      image: hardSeltzer,
    },
    {
      name: "Beer",
      taste: "Bitter",
      percent: "4%-5%",
      image: beer,
    },
    {
      name: "Red Wine",
      taste: "Sweet",
      percent: "5-14%",
      image: redWine,
    },
    {
      name: "White Wine",
      taste: "Sweet",
      percent: "5-14%",
      image: whiteWine,
    },
    {
      name: "Brandy",
      taste: "Sweet",
      percent: "35-60%",
      image: brandy,
    },
  ];

  return (
    <Carousel
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <Button onClick={onClick} style={buttonStyle}>
            {next && "Next"}
            {prev && "Prev"}
          </Button>
        );
      }}
      NextIcon="next" // Change the "inside" of the next button to "next"
      PrevIcon="prev" // Change the "inside of the prev button to "prev"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div style={pStyle}>
      <h2>{props.item.name}</h2>
      <p>{props.item.taste}</p>
      <p>{props.item.percent}</p>
      <img style={imgStyle} src={props.item.image} />
    </div>
  );
}

const HomePage = () => (
  <div style={divStyle}>
    <br /> <br />
    <div style={carouselStyle}>{Example()}</div>
  </div>
);

export default HomePage;
