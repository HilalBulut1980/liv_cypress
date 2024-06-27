var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f3_hoehe_min",
    "produkt": "/plissee/color-breeze-1360",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "100",
    "breite": "1000",
    "hoehe_new": "300",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - F3 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})