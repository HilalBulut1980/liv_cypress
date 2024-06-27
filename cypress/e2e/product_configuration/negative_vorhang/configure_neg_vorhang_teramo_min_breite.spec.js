var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhang_Teramo_minBreite",
    "produkt": "/vorhaenge/dekoschal/teramo",
    "farbe": "Grau",
    "hoehe": "200",
    "breite": "50",
    "breite_new": "100",
    "message": "Die Breite muss größer als oder gleich 100 cm sein."
}

describe('Test: configuration of neg Vorhang - Teramo min.  Breite', () => {

    configurator.configure_neg_vorhang(test)

})