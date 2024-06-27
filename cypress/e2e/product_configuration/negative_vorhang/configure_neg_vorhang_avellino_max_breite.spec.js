var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhang_Avellino_maxBreite",
    "produkt": "/vorhaenge/dekoschal/avellino",
    "farbe": "Gelb",
    "hoehe": "200",
    "breite": "500",
    "breite_new": "420",
    "message": "Die Breite muss kleiner als oder gleich 435 cm sein."
}

describe('Test: configuration of neg Vorhang - Avellino max. Breite', () => {

    configurator.configure_neg_vorhang(test)

})