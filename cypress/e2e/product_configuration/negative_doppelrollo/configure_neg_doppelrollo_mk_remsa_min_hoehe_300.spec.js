var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_MK_minHoehe",
    "produkt": "/doppelrollo/remsa-5055",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "200",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "message": "Die minimale Höhe eines Doppelrollos beträgt 300 mm."
}

describe('Test: configuration of NEG Doppelrollo test - m.K. min Höhe 300', () => {

    configurator.configure_neg_doppelrollo(test)

})