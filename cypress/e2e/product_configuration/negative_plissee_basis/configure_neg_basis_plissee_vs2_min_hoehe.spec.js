var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-vs2-hoehe_min",
    "produkt": "/plissee/timeless-4100",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "100",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "schienenfarbe": "Silber",
    "message": "Die minimale Höhe eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - Basis VS2 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})