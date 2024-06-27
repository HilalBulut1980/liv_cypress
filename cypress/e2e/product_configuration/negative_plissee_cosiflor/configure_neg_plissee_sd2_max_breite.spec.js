var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-sd2_breite_max",
    "produkt": "/plissee/cadena-2277",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "1650",
    "hoehe_new": "1000",
    "breite_new": "1600",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 1600 mm sein."
}

describe('Test: configuration of neg Plissee test - SD2 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})