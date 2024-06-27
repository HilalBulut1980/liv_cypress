var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_minBreite",
    "produkt": "/doppelrollo/rayure-5002",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1000",
    "breite": "200",
    "hoehe_new": "1000",
    "breite_new": "300",
    "message": "Die minimale Breite eines Doppelrollos beträgt 300 mm."
}

describe('Test: configuration of neg Doppelrollo test - Mini m.K. Rayure min. Breite', () => {

    configurator.configure_neg_doppelrollo(test)

})