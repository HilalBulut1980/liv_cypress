var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f1_breite_max",
    "produkt": "/plissee/solea-1702",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2000",
    "breite": "2500",
    "breite_new": "2000",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - F1 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})