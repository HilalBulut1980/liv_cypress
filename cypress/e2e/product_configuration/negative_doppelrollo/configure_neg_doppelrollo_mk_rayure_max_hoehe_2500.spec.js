var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppel_MK_Rayure_maxHoehe2500",
    "produkt": "/doppelrollo/rayure-5018",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "3000",
    "breite": "1000",
    "hoehe_new": "2500",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Doppelrollos beträgt 2500 mm."
}

describe('Test: configuration of NEG Doppelrollo test - m.K. Rayure max Höhe 2500', () => {

    configurator.configure_neg_doppelrollo(test)

})