var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2_breite_max",
    "produkt": "/plissee/solea-1702",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "1600",
    "breite_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - VS2 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})