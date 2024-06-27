var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_MK_Modessa_maxHoehe2100",
    "produkt": "/doppelrollo/modessa-5101",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "3000",
    "breite": "1000",
    "hoehe_new": "2100",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Doppelrollos beträgt 2100 mm."
}

describe('Test: configuration of NEG Doppelrollo test - m.K. Modessa max Höhe 2100', () => {

    configurator.configure_neg_doppelrollo(test)

})