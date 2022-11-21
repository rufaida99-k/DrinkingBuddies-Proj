import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./compiledPg.css";
import { useQuery } from "react-query";

async function GetCocktailsById(id1, id2, id3,id4,id5,id6,id7,id8,id9,id10) {
  let finalResults = [];
  let Drinks = [id1,id2,id3,id4,id5,id6,id7,id8,id9,id10];

  for ( let i  = 0; i < 10; i++ ){
    let result = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + Drinks[i]
    );
    result = result.data;
    console.log(result);
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
  }
 
  return finalResults;
}

// async function GetCocktailsInfo(type) {
//   let url =
//     "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
//     type +
//     "&limit=1&namespace=0&format=json";
//   let result = await axios({ method: "get", url: url, withCredientals: false });
//   return result.data[3][0];
// }

const divStyle = {
  margin: "15px",
  width: "70vh",
  height: "65vh",
  borderRadius: "20px",
  borderColor: "#d2b7e5",
  fontFamily: "Garamond",
  fontSize: "20px",
  backgroundColor: "#dec9e9",  
  
};
const pStyle = {
  margin: "5px",
  textAlign: "center",
  backgroundColor: "#dec9e9",  
};

const pageStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const carouselStyle = {
  border: "1px solid #e5d9f2",
  borderRadius: "10px",
  height: "45vh",
  margin: "10px",
};

const h1Style = {
    fontWeight: "bolder",
}

const imgStyle = {
  width: "120px",
  height: "120px",
};


function Example(content) {
  return (
    <Carousel
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <Button onClick={onClick} id="buttonStyle">
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

      <img style={imgStyle} alt ="Associated Drink" src={props["item"].image} />
      <br />
    </div>
  );
}

const CompiledPage = () => {

    /*    DRINKS   */

  //WHISKEY
  const { data: whiskey } = useQuery(["cocktaildb", "whiskey"], async () => {
    return GetCocktailsById("11004","12101","12127","11001","11008","17206","11423","11324","11580", "17251");
 });

 //VODKA
  const { data: vodka } = useQuery(["cocktaildb", "vodka"], async () => {
    return GetCocktailsById("14167","11113","17196","17212","12754","11009","15024","12528","178357","12162");
  });

  //RUM
  const { data: rum } = useQuery(["cocktaildb", "rum"], async () => {
    return GetCocktailsById("17191","11690","17207","11006","11000","17211","17268","12093","17204","14978");
  });

  //TEQUILA
  const { data: tequila } = useQuery(["cocktaildb", "tequila"], async () => {
     return GetCocktailsById("17253","13621","12370","11007","178332","178307","178347","17216","16289","11112");
  });

  //BOURBON
  const { data: bourbon } = useQuery(["cocktaildb", "bourbon"], async () => {
    return GetCocktailsById("11001","11147","178333","11146","11766","11021","16447","11602","11604","178345");
 });

  //GIN
  const { data: gin } = useQuery(["cocktaildb", "gin"], async () => {
    return GetCocktailsById("11403","11003","11410","17210","14087","17194","17197","17180","11936","11418");
  });

  /*      WIKI    */

  // const { data: whiskey_wiki } = useQuery(["wiki", "whiskey"], async () => {
  //   return GetCocktailsInfo("whiskey");
  // });


    // const { data: vodka_wiki } = useQuery(["wiki", "vodka_wiki"], async () => {
  //   return GetCocktailsInfo("vodka");
  // });


  // const { data: rum_wiki } = useQuery(["wiki", "rum"], async () => {
  //   return GetCocktailsInfo("rum");
  // });


  // const { data: tequila_wiki } = useQuery(["wiki", "tequila"], async () => {
  //   return GetCocktailsInfo("tequila");
  // });

    // const { data: gin_wiki } = useQuery(["wiki", "gin"], async () => {
  //   return GetCocktailsInfo("gin");
  // });
  

  return (
    <>
      <div style={pageStyle}>
        <div style={divStyle}>
          
          
        <br />
          <h1 style={h1Style}> Whiskey </h1>
          <div style={carouselStyle}>{Example(whiskey ?? [])}</div>
          <br />

          <hr />
          {/* <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={whiskey_wiki}
          >
            Learn More
          </Button> */}
        </div>
          
        <div style={divStyle}>
        <br />
          <h1 style={h1Style}> Vodka </h1>

          <div style={carouselStyle}>{Example(vodka ?? [])}</div>
          <br />
          <hr />
          {/* <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={vodka_wiki}
          >
            Learn More
          </Button> */}
        </div>
         
        <div style={divStyle}>
          <br />
          <h1 style={h1Style}> Rum </h1>
          <div style={carouselStyle}>{Example(rum ?? [])}</div>
          <br />

          <hr />
          {/* <Button
            as="a"
            variant="outline-secondary"
            size="lg"
            href={rum_wiki}
          >
            Learn More
          </Button> */}
        </div> 
      </div>
{       
      <div style={pageStyle}>
        <div style={divStyle}>
          
        <br />
          <h1 style={h1Style}> Tequila </h1>
          <div style={carouselStyle}>{Example(tequila ?? [])}</div>
          <br />

          <hr />
          {/* <Button as="a" variant="outline-secondary" size="lg" href={gin_wiki}>
            Learn more{" "}
          </Button> */}
        </div>

        <div style={divStyle}>
          <br />
          <h1 style={h1Style}> Bourbon </h1>
          <div style={carouselStyle}>{Example(bourbon ?? [])}</div>
          <br />

          <hr />
          {/* <Button as="a" variant="outline-secondary" size="lg" href={rum_wiki}>
            Learn more{" "}
          </Button> */}
        </div>
        <div style={divStyle}>
          <br />
          {<h1 style={h1Style}> Gin </h1> }
          <div style={carouselStyle}>{Example(gin ?? [])}</div>
          <br />

          <hr />
          {/* <Button as="a" variant="outline-secondary" size="lg" href={beer_wiki}>
            Learn More
          </Button> */}
        </div>
      </div>
      }
    </>
  );
};

export default CompiledPage;
