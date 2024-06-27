var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs1_hoehe_min",
    "produkt": "/plissee/color-breeze-1358",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "150",
    "breite": "1000",
    "hoehe_new": "200",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss größer als oder gleich 200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS1 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})