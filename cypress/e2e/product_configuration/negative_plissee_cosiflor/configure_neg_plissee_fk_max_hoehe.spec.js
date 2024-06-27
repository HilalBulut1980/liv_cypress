var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fk_hoehe_max",
    "produkt": "/plissee/wabe-rimano-4380",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2605",
    "breite": "1300",
    "hoehe_new": "2600",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2600 mm sein."
}

describe('Test: configuration of neg Plissee test - FK max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})