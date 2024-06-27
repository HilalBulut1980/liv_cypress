var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2sc_hoehe_min",
    "produkt": "/plissee/freja-1765",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "150",
    "breite": "900",
    "hoehe_new": "200",
    "message": "Die Höhe muss größer als oder gleich 200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS2 SC min. Hoehe', () => {

    configurator.configure_neg_plissee(test)

})