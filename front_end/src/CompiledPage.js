import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Button from "react-bootstrap/Button";

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
  backgroundColor: "pink",
  width: "50vh",
};
const pStyle = {
  margin: "10px",

  textAlign: "center",
  fontFamily: "Chalkduster",
};

const pageStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  height: "140px",
};

var bitterItems = [
  {
    name: "Gin",
    taste: "Bitter",
    percent: "35% - 55%",
    image: gin,
    price: "$$",
  },
  {
    name: "Vodka",
    taste: "Bitter",
    percent: "40%",
    image: vodka,
    price: "$$",
  },

  {
    name: "Beer",
    taste: "Bitter",
    percent: "4%-5%",
    image: beer,
    price: "$",
  },
];

var otherItems = [
  {
    name: "Whiskey",
    taste: "Bittersweet",
    percent: "40%-50%",
    image: whiskey,
    price: "$$",
  },
  {
    name: "Hard Seltzer",
    taste: "Sweet/fruity",
    percent: "4%-8%",
    image: hardSeltzer,
    price: "$",
  },
];
var sweetItems = [
  {
    name: "Rum",
    taste: "Sweet",
    percent: "40% - 75.5%",
    image: rum,
    price: "$$",
  },
  {
    name: "Tequila",
    taste: "Sweet",
    percent: "40%",
    image: tequila,
    price: "$",
  },

  {
    name: "Red Wine",
    taste: "Sweet",
    percent: "5-14%",
    image: redWine,
    price: "$$",
  },
  {
    name: "White Wine",
    taste: "Sweet",
    percent: "5-14%",
    image: whiteWine,
    price: "$$",
  },
  {
    name: "Brandy",
    taste: "Sweet",
    percent: "35-60%",
    image: brandy,
    price: "$$",
  },
];
function Example(content) {
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
      {content.map((item, i) => (
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
      <p>{props.item.price}</p>

      <img style={imgStyle} src={props.item.image} />
      <br />
    </div>
  );
}

const HomePage = () => (
  <div style={pageStyle}>
    <div style={divStyle}>
      <br />
      <h1> Sweet Drinks </h1>
      <br />
      <div style={carouselStyle}>{Example(sweetItems)}</div>
      <hr />
      <Button as="a" variant="outline-secondary" size="lg" href="#started">
        Learn More
      </Button>
    </div>
    <div style={divStyle}>
      <br />
      <h1> Bitter Drinks </h1>
      <br />
      <div style={carouselStyle}>{Example(bitterItems)}</div>
      <hr />
      <Button as="a" variant="outline-secondary" size="lg" href="#started">
        Learn More
      </Button>
    </div>
    <div style={divStyle}>
      <br />
      <h1> Other Drinks </h1>
      <br />
      <div style={carouselStyle}>{Example(otherItems)}</div>
      <hr />
      <Button as="a" variant="outline-secondary" size="lg" href="#started">
        Learn More
      </Button>
    </div>
  </div>
);

export default HomePage;
