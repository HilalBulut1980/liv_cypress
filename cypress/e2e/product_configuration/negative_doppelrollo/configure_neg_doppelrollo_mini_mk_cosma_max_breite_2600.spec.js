var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_MK_Cosma_maxBreite2600",
    "produkt": "/doppelrollo/cosma-5088",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1500",
    "breite": "3000",
    "hoehe_new": "1500",
    "breite_new": "2600",
    "message": "Die maximale Breite eines Doppelrollos beträgt 2600 mm."
}

describe('Test: configuration of neg Doppelrollo test - m.K. Cosma max Breite 2600', () => {

    configurator.configure_neg_doppelrollo(test)

})