var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-vs1-hoehe_max",
    "produkt": "/plissee/timeless-4101",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "2500",
    "breite": "1000",
    "hoehe_new": "2200",
    "breite_new": "1000",
    "schienenfarbe": "Silber",
    "message": "Die maximale Höhe eines Plissee beträgt 2200 mm."
}

describe('Test: configuration of neg Plissee test - Basis VS1 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})