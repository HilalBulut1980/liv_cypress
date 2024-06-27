var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_minHoehe",
    "produkt": "/doppelrollo/remsa-5064",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "200",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "message": "Die minimale Höhe eines Doppelrollos beträgt 300 mm."
}

describe('Test: configuration of neg Doppelrollo test - Mini m.K. Remsa min. Höhe', () => {

    configurator.configure_neg_doppelrollo(test)

})