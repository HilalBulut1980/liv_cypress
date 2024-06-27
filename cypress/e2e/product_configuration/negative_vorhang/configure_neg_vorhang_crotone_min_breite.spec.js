var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Gardine_Macari_minBreite",
    "produkt": "/vorhaenge/dekoschal/crotone",
    "farbe": "Weiß",
    "hoehe": "200",
    "breite": "10",
    "breite_new": "100",
    "message": "Die Breite muss größer als oder gleich 100 cm sein."
}

describe('Test: configuration of neg Vorhang - Macari min. Breite', () => {

    configurator.configure_neg_vorhang(test)

})