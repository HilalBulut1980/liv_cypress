var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f3_breite_max",
    "produkt": "/plissee/solea-1702",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1700",
    "breite": "2500",
    "breite_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - F3 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})