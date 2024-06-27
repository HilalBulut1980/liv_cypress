var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Gardine_Macari_maxBreite",
    "produkt": "/vorhaenge/dekoschal/crotone",
    "farbe": "Weiß",
    "hoehe": "200",
    "breite": "550",
    "breite_new": "500",
    "message": "Die Breite muss kleiner als oder gleich 500 cm sein."
}

describe('Test: configuration of neg Vorhang - Macari max. Breite', () => {

    configurator.configure_neg_vorhang(test)

})