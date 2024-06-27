var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Cosma_maxHoehe2200",
    "produkt": "/doppelrollo/cosma-5086",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "2400",
    "breite": "1000",
    "hoehe_new": "2200",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 2200 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of neg Doppelrollo test - Mini m.K. Cosma max. Höhe 2200', () => {

    configurator.configure_neg_doppelrollo(test)

})