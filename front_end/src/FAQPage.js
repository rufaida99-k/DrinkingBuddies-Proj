import Button from "react-bootstrap/Button";

const SINGLE_PAGE = "calc(100vh - 3.25rem)";

const divStyle = {
  margin: "40px",
  height: "70vh",
  border: "15px solid #fda0d8",
  backgroundColor: "pink",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
const pStyle = {
  fontSize: "100px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const wrapperStyle = {
  padding: "40px",
  boxSizing: "border-box",
  height: SINGLE_PAGE,
  maxHeight: SINGLE_PAGE,
};

const HomePage = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={wrapperStyle}>
      <div style={divStyle}>
        <p style={pStyle}> About Drinking Buddies!</p>
        <hr />
        <Button as="a" variant="outline-secondary" size="lg" href="#started">
          Get Started
        </Button>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: SINGLE_PAGE,
        maxHeight: SINGLE_PAGE,
      }}
    >
      <br />
      <div style={divStyle}>
        <p>Q. What is alcohol?</p>
        <p>
          A. Ethyl alcohol, or ethanol, is an intoxicating ingredient found in
          beer, wine, and liquor. Alcohol is produced by the fermentation of
          yeast, sugars, and starches.
        </p>
        <p>Q. Why do people drink alcohol?</p>
        <p>
          A. A number of reasons! To enhance sociability, to increase power, to
          escape problems, to get drunk, for enjoyment, or for ritualistic
          reasons.
        </p>
        <p>Q. What's the equivalent of one drink of alcohol?</p>
        <p>
          A. In the USA, one drink is equivalent to 14 grams of pure alcohol,
          which is generally equal to 12 oz of beer, 5 oz of wine, and 1.5 fl oz
          of a spirit. It may vary depending on the alcohol content of the
          beverage.
        </p>
        <p>Q. How can I know if I may have a drinking problem?</p>
        <p>
          A. There are many online resources to understand what constitutes a
          drinking problem. You can take a test here to see if you may have a
          heavy drinking issue: https://auditscreen.org/check-your-drinking
        </p>
      </div>
      <div id="started"></div>
    </div>
  </div>
);

export default HomePage;
