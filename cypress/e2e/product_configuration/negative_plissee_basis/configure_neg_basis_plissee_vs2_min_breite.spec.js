var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-vs2-breite_min",
    "produkt": "/plissee/timeless-4102",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1500",
    "breite": "200",
    "hoehe_new": "1500",
    "breite_new": "300",
    "schienenfarbe": "Silber",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - Basis VS2 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})