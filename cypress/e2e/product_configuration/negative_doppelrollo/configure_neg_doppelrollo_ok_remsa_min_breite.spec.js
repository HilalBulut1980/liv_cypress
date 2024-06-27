var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_OK_minBreite",
    "produkt": "/doppelrollo/remsa-5055",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1000",
    "breite": "200",
    "hoehe_new": "1000",
    "breite_new": "300",
    "message": "Die minimale Breite eines Doppelrollos beträgt 300 mm."
}

describe('Test: configuration of NEG Doppelrollo test - o.K. min Breite 300', () => {

    configurator.configure_neg_doppelrollo(test)

})