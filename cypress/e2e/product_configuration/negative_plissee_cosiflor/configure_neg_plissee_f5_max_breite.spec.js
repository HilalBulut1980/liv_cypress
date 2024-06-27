var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f5_breite_max",
    "produkt": "/plissee/blackout-color-1545",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1800",
    "breite": "2100",
    "breite_new": "2000",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - F5 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})