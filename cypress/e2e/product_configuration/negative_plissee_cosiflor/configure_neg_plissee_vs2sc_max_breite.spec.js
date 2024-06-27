var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2sc_breite_max",
    "produkt": "/plissee/solea-1702",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "1900",
    "breite_new": "1800",
    "message": "Die Breite muss kleiner als oder gleich 1800 mm sein."
}

describe('Test: configuration of neg Plissee test - VS2 SC max. Breite', () => {

    configurator.configure_neg_plissee(test)

})