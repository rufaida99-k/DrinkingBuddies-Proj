
import Carousel from "react-material-ui-carousel";
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




function Example(content) {
  return (
    <Carousel
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <Button onClick={onClick} id="buttonStyle">
            {next && ">"}
            {prev && "<"}
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

    <div className="browse-pStyle" >

      <h2>{props["item"].name}</h2>

      <p>
        {" "}
        Ingredients: {props["item"].ing1}, {props["item"].ing2},{" "}
        {props["item"].ing3}{" "}
      </p>

      <img className="browse-ImgStyle" alt ="Associated Drink" src={props["item"].image} />

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

 
  let iconSrc = require("./compiledList-Images/menuColor.png");

  return (
    <>
   
     
      
      <div className="browsePageStyle"> 

        {/* title of the page with icon */}
        <div className= "browseTitle-area"> 

        <img className= "iconStyle" src={iconSrc} alt=""></img>

         <h1 className= "browseTitle">  Browse Drinks </h1> </div>
        
        
        {/* row 1 of carousels */}
        <div className="browseRowStyle"> 
          <div className= "browseDivStyle"> 
            <br />
            <h1 className="browse-H1Style"> Whiskey </h1>
            <div className="browse-carouselStyle" >{Example(whiskey ?? [])}</div>
            <br />
            <hr />
          </div>
            
          <div className= "browseDivStyle">
            <br />
            <h1 className="browse-H1Style"> Vodka </h1>
            <div className="browse-carouselStyle">{Example(vodka ?? [])}</div>
            <br />
            <hr />
          </div>
          
          <div className="browseDivStyle">
            <br />
            <h1 className="browse-H1Style"> Rum </h1>
            <div className="browse-carouselStyle">{Example(rum ?? [])}</div>
            <br />
            <hr />
          </div> 
        </div>
      
      
        {/* row 2 of carousels  */}
   
        <div className="browseRowStyle"> 

          <div className="browseDivStyle">
            <br />
            <h1 className="browse-H1Style"> Tequila </h1>
            <div className="browse-carouselStyle">{Example(tequila ?? [])}</div>
            <br />
            <hr />
          </div>

          <div className="browseDivStyle">
            <br />
            <h1 className="browse-H1Style"> Bourbon </h1>
            <div className="browse-carouselStyle">{Example(bourbon ?? [])}</div>
            <br />
            <hr />
          </div>

          <div className="browseDivStyle">
            <br />
            {<h1 className="browse-H1Style"> Gin </h1> }
            <div className="browse-carouselStyle">{Example(gin ?? [])}</div>
            <br />
            <hr />
          </div>
        </div>

      </div>
      
    </>
  );
};

export default CompiledPage;
