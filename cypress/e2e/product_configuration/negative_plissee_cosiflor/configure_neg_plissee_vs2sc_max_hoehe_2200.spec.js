var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2sc_hoehe_max",
    "produkt": "/plissee/color-breeze-1358",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "2300",
    "breite": "1500",
    "hoehe_new": "2200",
    "message": "Die Höhe muss kleiner als oder gleich 2200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS2 SC max. Hoehe 2200', () => {

    configurator.configure_neg_plissee(test)

})