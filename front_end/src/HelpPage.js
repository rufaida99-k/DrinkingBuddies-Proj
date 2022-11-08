import Button from "react-bootstrap/Button";

const SINGLE_PAGE = "calc(100vh - 3.25rem)";
const aboutUs = require("./img/aboutUs2.png");

const divStyle = {
  border: "15px solid #fda0d8",
  boxSizing: "border-box",
  height: "70vh",
  backgroundColor: "pink",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const wrapperStyle = {
  padding: "40px",
  boxSizing: "border-box",
  height: SINGLE_PAGE,
  maxHeight: SINGLE_PAGE,
};

const pStyle = {
  fontSize: "170px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const p2Style = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "AmericanTypewriter",
  padding: "30px",
};

const imgStyle = {
  width: "300px",
};

const HomePage = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={wrapperStyle}>
      <div style={divStyle}>
        <p style={pStyle}> Help Center!</p>
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
        <p style={p2Style}>
          {" "}
          Feel like you might have an unhealthy relationship with drinking alcohol?
          Reach out to the SAMSHA 24 hours a day, 7 day a week, 365 days a year help center.
          SAMHSA’s National Helpline, 1-800-662-HELP (4357) (also known as the Treatment Referral Routing Service), or TTY: 1-800-487-4889 is a confidential, free, information service, in English and Spanish, for individuals and family members facing mental and/or substance use disorders. This service provides referrals to local treatment facilities, support groups, and community-based organizations.
        </p>
      </div>
      <div id="started"></div>
    </div>
  </div>
);

export default HomePage;
