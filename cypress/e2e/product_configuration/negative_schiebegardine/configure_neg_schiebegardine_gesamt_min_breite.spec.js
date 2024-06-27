var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_gesamt_minB",
    "produkt": "/schiebegardinen/hanini-7321",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "290",
    "breite_new": "300",
    "message": "Die minimale Breite einer Schiebegardine beträgt 300 mm."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - min. Breite', () => {

    configurator.configure_neg_schiebegardine(test)

})