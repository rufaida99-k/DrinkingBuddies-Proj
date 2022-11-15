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

async function GetCocktailsInfo(type) {
  let url =
    "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    type +
    "&limit=1&namespace=0&format=json";
  let result = await axios({ method: "get", url: url, withCredientals: false });
  return result.data[3][0];
}

const divStyle = {
  margin: "10px",
  height: "80vh",

  border: "5px solid #fda0d8",
  backgroundColor: "pink",
  width: "90vh",
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
  marginTop: "150px",
};

const carouselStyle = {
  border: "2px solid #fda0d8",
  borderRadius: "10px",
  height: "45vh",
  margin: "10px",
};

const imgStyle = {
  width: "100px",
  height: "120px",
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
  const { data: vodka } = useQuery(["cocktaildb", "vodka"], async () => {
    return GetCocktails("vodka");
  });

  const { data: vodka_wiki } = useQuery(["wiki", "vodka_wiki"], async () => {
    return GetCocktailsInfo("vodka");
  });

  const { data: gin } = useQuery(["cocktaildb", "gin"], async () => {
    return GetCocktails("gin");
  });

  const { data: gin_wiki } = useQuery(["wiki", "gin"], async () => {
    return GetCocktailsInfo("gin");
  });

  const { data: tequila } = useQuery(["cocktaildb", "tequila"], async () => {
    return GetCocktails("tequila");
  });

  const { data: tequila_wiki } = useQuery(["wiki", "tequila"], async () => {
    return GetCocktailsInfo("tequila");
  });

  const { data: whiskey } = useQuery(["cocktaildb", "whiskey"], async () => {
    return GetCocktails("whiskey");
  });

  const { data: whiskey_wiki } = useQuery(["wiki", "whiskey"], async () => {
    return GetCocktailsInfo("whiskey");
  });

  const { data: rum } = useQuery(["cocktaildb", "rum"], async () => {
    return GetCocktails("rum");
  });

  const { data: rum_wiki } = useQuery(["wiki", "rum"], async () => {
    return GetCocktailsInfo("rum");
  });

  const { data: beer } = useQuery(["cocktaildb", "beer"], async () => {
    return GetCocktails("beer");
  });

  const { data: beer_wiki } = useQuery(["wiki", "beer"], async () => {
    return GetCocktailsInfo("beer");
  });

  const { data: scotch } = useQuery(["cocktaildb", "scotch"], async () => {
    return GetCocktails("scotch");
  });

  const { data: scotch_wiki } = useQuery(["wiki", "scotch"], async () => {
    return GetCocktailsInfo("scotch");
  });

  const { data: ale } = useQuery(["cocktaildb", "ale"], async () => {
    return GetCocktails("ale");
  });

  const { data: ale_wiki } = useQuery(["wiki", "ale"], async () => {
    return GetCocktailsInfo("ale");
  });

  const { data: vermouth } = useQuery(["cocktaildb", "vermouth"], async () => {
    return GetCocktails("vermouth");
  });

  const { data: vermouth_wiki } = useQuery(["wiki", "vermouth"], async () => {
    return GetCocktailsInfo("vermouth");
  });

  return (
    <>
      <div style={pageStyle}>
        <div style={divStyle}>
          <br />
          <h1> Vodka </h1>

          <div style={carouselStyle}>{Example(vodka ?? [])}</div>
          <br />
          <hr />
          <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={vodka_wiki}
          >
            Learn More
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Gin </h1>
          <div style={carouselStyle}>{Example(gin ?? [])}</div>
          <br />

          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href={gin_wiki}>
            Learn more{" "}
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Tequila </h1>
          <div style={carouselStyle}>{Example(tequila ?? [])}</div>
          <br />

          <hr />
          <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={tequila_wiki}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div style={pageStyle}>
        <div style={divStyle}>
          <br />
          <h1> Whiskey </h1>
          <div style={carouselStyle}>{Example(whiskey ?? [])}</div>
          <br />

          <hr />
          <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={whiskey_wiki}
          >
            Learn More
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Rum </h1>
          <div style={carouselStyle}>{Example(rum ?? [])}</div>
          <br />

          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href={rum_wiki}>
            Learn more{" "}
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Beer </h1>
          <div style={carouselStyle}>{Example(beer ?? [])}</div>
          <br />

          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href={beer_wiki}>
            Learn More
          </Button>
        </div>
      </div>
      <div style={pageStyle}>
        <div style={divStyle}>
          <br />
          <h1> Scotch </h1>
          <div style={carouselStyle}>{Example(scotch ?? [])}</div>

          <br />
          <hr />
          <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={scotch_wiki}
          >
            Learn More
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Ale </h1>

          <div style={carouselStyle}>{Example(ale ?? [])}</div>
          <br />
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href={ale_wiki}>
            Learn more{" "}
          </Button>
        </div>
        <div style={divStyle}>
          <br />
          <h1> Vermouth </h1>

          <div style={carouselStyle}>{Example(vermouth ?? [])}</div>
          <br />

          <hr />
          <Button
            as="a"
            variant="outline-secondary"
            size="sm"
            href={vermouth_wiki}
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default CompiledPage;
