var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_OK_minHoehe",
    "produkt": "/doppelrollo/remsa-5055",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "200",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "message": "Die minimale Höhe eines Doppelrollos beträgt 300 mm."
}

describe('Test: configuration of NEG Doppelrollo test - o.K. min Höhe 300', () => {

    configurator.configure_neg_doppelrollo(test)

})