var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_gesamt_maxB",
    "produkt": "/schiebegardinen/bambou-7344",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "5901",
    "breite_new": "5900",
    "message": "Die maximale Breite einer Schiebegardine beträgt 5900 mm."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - max. Breite', () => {

    configurator.configure_neg_schiebegardine(test)

})