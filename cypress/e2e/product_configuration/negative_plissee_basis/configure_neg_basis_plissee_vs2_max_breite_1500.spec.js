var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-vs2-breite_max",
    "produkt": "/plissee/timeless-4105",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1500",
    "breite": "2000",
    "hoehe_new": "1500",
    "breite_new": "1500",
    "schienenfarbe": "Silber",
    "message": "Die maximale Breite eines Plissee beträgt 1500 mm."
}

describe('Test: configuration of neg Plissee test - Basis VS2 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})