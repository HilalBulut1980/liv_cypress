var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_OK_Lacinia_maxBreite2300",
    "produkt": "/doppelrollo/lacinia-5053",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1500",
    "breite": "2400",
    "hoehe_new": "1500",
    "breite_new": "2300",
    "message": "Die maximale Breite eines Doppelrollos beträgt 2300 mm."
}

describe('Test: configuration of NEG Doppelrollo test - o.K. Lacinia max. Breite 2300', () => {

    configurator.configure_neg_doppelrollo(test)

})