var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_OK_Lacinia_maxHoehe1900",
    "produkt": "/doppelrollo/lacinia-5052",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "3000",
    "breite": "1000",
    "hoehe_new": "1900",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Doppelrollos beträgt 1900 mm."
}

describe('Test: configuration of NEG Doppelrollo test - o.K. Lacinia max. Höhe 1900', () => {

    configurator.configure_neg_doppelrollo(test)

})