var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f5_hoehe_max",
    "produkt": "/plissee/scacchi-4177",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2610",
    "breite": "1500",
    "hoehe_new": "2600",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2600 mm sein."
}

describe('Test: configuration of neg Plissee test - F5 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})