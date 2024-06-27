var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Gardine_Macari_minHoehe",
    "produkt": "/vorhaenge/dekoschal/crotone",
    "farbe": "Weiß",
    "hoehe": "50",
    "breite": "200",
    "hoehe_new": "100",
    "message": "Die Höhe muss größer als oder gleich 100 cm sein."
}

describe('Test: configuration of neg Vorhang - Macari min. Höhe', () => {

    configurator.configure_neg_vorhang(test)

})