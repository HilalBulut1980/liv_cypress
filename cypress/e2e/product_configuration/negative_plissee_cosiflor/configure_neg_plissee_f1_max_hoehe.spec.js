var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f1_hoehe_max",
    "produkt": "/plissee/freja-1772",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2700",
    "breite": "1500",
    "hoehe_new": "2600",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2600 mm sein."
}

describe('Test: configuration of neg Plissee test - F1 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})