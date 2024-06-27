var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_gesamt_minH",
    "produkt": "/schiebegardinen/hilko-7319",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "299",
    "breite": "3000",
    "hoehe_new": "300",
    "message": "Die minimale Höhe einer Schiebegardine beträgt 300 mm."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - min. Höhe', () => {

    configurator.configure_neg_schiebegardine(test)

})