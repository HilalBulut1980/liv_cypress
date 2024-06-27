var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Gardine_Macari_maxHoehe",
    "produkt": "/vorhaenge/dekoschal/crotone",
    "farbe": "Weiß",
    "hoehe": "300",
    "breite": "200",
    "hoehe_new": "245",
    "message": "Die Höhe muss kleiner als oder gleich 290 cm sein."
}

describe('Test: configuration of neg Vorhang - Macari max. Höhe', () => {

    configurator.configure_neg_vorhang(test)

})