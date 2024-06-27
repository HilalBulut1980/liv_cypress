var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Striscia_maxBreite1100",
    "produkt": "/doppelrollo/striscia-5030",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "2000",
    "breite": "1500",
    "hoehe_new": "1000",
    "breite_new": "1100",
    "message": "Die maximale Breite eines Mini-Doppelrollos beträgt 1100 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Rayure oder Remsa)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini m.K. Striscia max. Breite 1100', () => {

    configurator.configure_neg_doppelrollo(test)

})