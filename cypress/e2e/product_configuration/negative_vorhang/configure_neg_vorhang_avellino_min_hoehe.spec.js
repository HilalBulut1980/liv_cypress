var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhang_Avellino_minHoehe",
    "produkt": "/vorhaenge/dekoschal/avellino",
    "farbe": "Grau",
    "hoehe": "50",
    "breite": "300",
    "hoehe_new": "100",
    "message": "Die Höhe muss größer als oder gleich 100 cm sein."
}

describe('Test: configuration of neg Vorhang - Avellino min. Höhe', () => {

    configurator.configure_neg_vorhang(test)

})