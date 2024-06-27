var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_gesamt_maxH",
    "produkt": "/schiebegardinen/ukko-7331",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "3200",
    "breite": "2000",
    "hoehe_new": "3000",
    "message": "Die maximale Höhe einer Schiebegardine beträgt 3000 mm."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - max. Höhe', () => {

    configurator.configure_neg_schiebegardine(test)

})