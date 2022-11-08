import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useQuery } from "react-query";

async function GetCocktails(type) {
  let finalResults = [];

  let result = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + type
  );
  result = result.data;
  for (let drink of result["drinks"]) {
    let temp = {
      name: drink["strDrink"],
      ing1: drink["strIngredient1"],
      ing2: drink["strIngredient2"],
      ing3: drink["strIngredient3"],
      category: drink["strCategory"],
      image: drink["strDrinkThumb"],
    };
    finalResults.push(temp);
  }
  return finalResults;
}

const divStyle = {
  margin: "20px",
  height: "85vh",
  border: "15px solid #fda0d8",
  backgroundColor: "pink",
  width: "50vh",
};
const pStyle = {
  margin: "5px",
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
  marginTop: "200px",
};

const carouselStyle = {
  margin: "10px",
  border: "3px solid #fda0d8",
  borderRadius: "10px",
};

const imgStyle = {
  width: "120px",
  height: "140px",
};

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
      <h2>{props["item"].name}</h2>
      <p>
        {" "}
        Main Ingredients: {props["item"].ing1}, {props["item"].ing2},{" "}
        {props["item"].ing3}{" "}
      </p>
      <p>{props["item"].category}</p>

      <img style={imgStyle} src={props["item"].image} />
      <br />
    </div>
  );
}

const CompiledPage = () => {
  const { data: data1 } = useQuery(["cocktaildb", "vodka"], async () => {
    return GetCocktails("vodka");
  });

  const { data: data2 } = useQuery(["cocktaildb", "gin"], async () => {
    return GetCocktails("gin");
  });

  const { data: data3 } = useQuery(["cocktaildb", "tequila"], async () => {
    return GetCocktails("tequila");
  });

  const { data: data4 } = useQuery(["cocktaildb", "whiskey"], async () => {
    return GetCocktails("whiskey");
  });

  const { data: data5 } = useQuery(["cocktaildb", "rum"], async () => {
    return GetCocktails("rum");
  });

  const { data: data6 } = useQuery(["cocktaildb", "beer"], async () => {
    return GetCocktails("beer");
  });

  const { data: data7 } = useQuery(["cocktaildb", "scotch"], async () => {
    return GetCocktails("scotch");
  });

  const { data: data8 } = useQuery(["cocktaildb", "ale"], async () => {
    return GetCocktails("ale");
  });

  const { data: data9 } = useQuery(["cocktaildb", "vermouth"], async () => {
    return GetCocktails("vermouth");
  });

  return (
    <>
      <div style={pageStyle}>
        <div style={divStyle}>
          <br />
          <h1> Vodka Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data1 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn More
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Gin Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data2 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn more{" "}
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Tequila Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data3 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn More
          </Button>
        </div>
      </div>
      <div style={pageStyle}>
        <div style={divStyle}>
          <br />
          <h1> Whiskey Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data4 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn More
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Rum Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data5 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn more{" "}
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Beer Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data6 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn More
          </Button>
        </div>
      </div>
      <div style={pageStyle}>
        <div style={divStyle}>
          <br />
          <h1> Scotch Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data7 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn More
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Ale Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data8 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn more{" "}
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Vermouth Drinks </h1>
          <br />
          <div style={carouselStyle}>{Example(data9 ?? [])}</div>
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="#started">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default CompiledPage;
