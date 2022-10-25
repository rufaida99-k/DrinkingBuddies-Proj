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

const HomePage = () => (
  <div style={divStyle}>
    <p style={pStyle}>Help Center Information!</p>
  </div>
);

export default HomePage;
