import "./HelpPage.css";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const wrapperStyle = {
  padding: "20px",
  boxSizing: "border-box",
  backgroundColor: "#E3D7FF",
};

const pStyle = {
  fontSize: "120px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const p2Style = {
  fontSize: "35px",
  textAlign: "center",
  fontFamily: "AmericanTypewriter",
  padding: "10px",
  display: "block",
  fontWeight: "bold",
};

export default function helpCenter() {
  return (
    <div style={wrapperStyle}>
      <div style={divStyle}>
        <p style={pStyle}> Help Center</p>

        <div className="HomePage">
          {/* section title */}
          <div>
            <p style={p2Style}>
              {" "}
              Is this an emergency?
              <p className="answer"> Call 911! </p>
            </p>
            <p style={p2Style}>
              {" "}
              Do you need a cab service?
              <div className="helpButton">
                <a
                  href="https://auth.uber.com/v2/?breeze_local_zone=dca22&next_url=https%3A%2F%2Fm.uber.com%2Flooking&state=FP5gm-9KBct3wOYjoVshPfM8579RqQSxc2Lv2fL4JQc%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <button className="buttonStyle">Uber</button>
                </a>
                <a
                  href="https://ride.lyft.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <button className="buttonStyle">Lyft</button>
                </a>
              </div>
            </p>

            <p style={p2Style}>
              {" "}
              Do you want to talk with someone about alcohol abuse addiction?
            </p>
            <div>
              <ul className="newList">
                <li className="newBullet">
                  Feel like you might have an unhealthy relationship with
                  drinking alcohol? Reach out to the SAMSHA 24 hours a day, 7
                  day a week, 365 days a year help center. SAMHSA’s National
                  Helpline, 1-800-662-HELP (4357) (also known as the Treatment
                  Referral Routing Service), or TTY: 1-800-487-4889 is a
                  confidential, free, information service, in English and
                  Spanish, for individuals and family members facing mental
                  and/or substance use disorders. This service provides
                  referrals to local treatment facilities, support groups, and
                  community-based organizations.
                </li>
                <li className="newBullet">
                  HOPEline offers a general addiction help hotline number. This
                  is a NY hotline that offers help for New York prescription
                  drug abuse sufferers, provides 24/7 alcohol addiction help,
                  and can connect you with various NY addiction services. Call
                  877-846-7369.12
                </li>
                <li className="newBullet">
                  NYC Health offers a free NYC crisis hotline. This is where you
                  can learn about various NYC substance abuse programs.
                  1-888-NYC-WELL (1-888-692-9355).10
                </li>
                <li className="newBullet">
                  New York State Office of Alcoholism & Substance Abuse Services
                  has a toll-free 24-hour alcohol hotline for NY families whose
                  members are struggling with SUD. 877-8-HOPENY(467369).11
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
