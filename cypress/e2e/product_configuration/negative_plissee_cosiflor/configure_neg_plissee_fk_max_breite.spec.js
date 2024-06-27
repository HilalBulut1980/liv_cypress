var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fk_breite_max",
    "produkt": "/plissee/wabe-rimano-4380",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1800",
    "breite": "2320",
    "breite_new": "2300",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 2300 mm sein."
}

describe('Test: configuration of neg Plissee test - FK max. Breite', () => {

    configurator.configure_neg_plissee(test)

})