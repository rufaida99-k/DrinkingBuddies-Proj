const manhattan = require("./img/drinks/manhattan.png");
const cosmopolitan = require("./img/drinks/cocktail.png");
const old_fashioned = require("./img/drinks/old-fashioned.png");
const margarita = require("./img/drinks/margarita.png");
const daiquiri = require("./img/drinks/daiquiri.png");
const gin_and_tonic = require("./img/drinks/gin-tonic.png");

const DrinkData = {
  manhattan: {
    desc:
      "It's hard not to feel classy when you're drinking a Manhattan. A mix of whiskey, sweet vermouth, and bitters, it's the whiskey world's answer to the martini and arguably the quintessential cocktail of its kind. A classic Manhattan is rich, warming, and slightly sweet. It's great to sip on as the weather cools down.",
    img: manhattan,
  },
  cosmopolitan: {
    desc:
      "There are few cocktails more immediately recognizable than a Cosmopolitan. Lip-smackingly sweet and sour, the Cosmopolitan cocktail of vodka, cranberry, orange liqueur, and citrus is a good time in a glass. Perfect for a party!",
    img: cosmopolitan,
  },
  old_fashioned: {
    desc:
      "An Old Fashioned is a single-vessel, build-it-in-a-glass, stirred cocktail. All it takes is serving whiskey, sugar, bitters and, if you like, a cherry or orange garnish on the rocks. Properly made, it's strong but not too strong, sweet but not too sweet, and, most importantly, it's dead simple and absolutely delicious.",
    img: old_fashioned,
  },
  daiquiri: {
    desc:
      "Forget about the ubiquitous frozen drink served at swim-up bars and on cruise ships.  The Daiquiri is a light, refreshing, and even bracing (in a good way) sip for leisurely evenings spent alfresco. When mixed properly, three simple ingredients—rum, lime juice, and simple syrup—can create a transcendent experience.",
    img: daiquiri,
  },
  margarita: {
    desc:
      "Margaritas are what you pour for life’s happiest moments. Whether you like yours frozen, on the rocks, salt, or no salt, sweet or spicy, the margarita is a big, inclusive tent -- with a giant umbrella sticking out of it. A classic margarita is made with three things: tequila, lime juice, and agave. Normally, you’ll also throw in some orange liqueur, like triple sec or Cointreau. That super simple recipe creates lots of scope for variations!",
    img: margarita,
  },
  gin_and_tonic: {
    desc:
      "Classic and easy, the gin and tonic is light and refreshing. It's a simple mixed drink that requires just the two named ingredients and a hint of lime, all of which are natural flavor companions. This is a great choice for happy hour, dinner, or anytime you simply want an invigorating beverage. ",
    img: gin_and_tonic,
  },
};

module.exports = DrinkData;
