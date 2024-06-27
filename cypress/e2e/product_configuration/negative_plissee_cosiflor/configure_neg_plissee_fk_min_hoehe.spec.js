var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fk_hoehe_min",
    "produkt": "/plissee/wabe-punkte-1527",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "294",
    "breite": "1100",
    "hoehe_new": "300",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - FK min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})