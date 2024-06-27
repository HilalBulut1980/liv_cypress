var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhang_Teramo_maxHoehe",
    "produkt": "/vorhaenge/dekoschal/teramo",
    "farbe": "Grün",
    "hoehe": "350",
    "breite": "300",
    "hoehe_new": "330",
    "message": "Die Höhe muss kleiner als oder gleich 330 cm sein."
}

describe('Test: configuration of neg Vorhang - Teramo max. Höhe', () => {

    configurator.configure_neg_vorhang(test)

})