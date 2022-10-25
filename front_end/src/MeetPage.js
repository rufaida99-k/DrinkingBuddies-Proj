import Button from "react-bootstrap/Button";

const divStyle = {
  margin: "40px",
  height: "70vh",
  border: "15px solid #fda0d8",
  backgroundColor: "pink",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const pStyle = {
  fontSize: "100px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const HomePage = () => (
  <div style={divStyle}>
    <p style={pStyle}>Meet up with Others!</p>
    <hr />
    <br />
    <Button variant="outline-secondary" size="lg">
      Get Started
    </Button>{" "}
  </div>
);

export default HomePage;
