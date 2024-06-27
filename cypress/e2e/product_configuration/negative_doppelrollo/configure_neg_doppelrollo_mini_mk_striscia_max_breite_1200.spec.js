var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Striscia_maxBreite1200",
    "produkt": "/doppelrollo/striscia-5030",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1800",
    "breite": "1500",
    "hoehe_new": "1000",
    "breite_new": "1200",
    "message": "Die maximale Breite eines Mini-Doppelrollos beträgt 1200 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Rayure oder Remsa)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini m.K. Striscia max. Breite 1300', () => {

    configurator.configure_neg_doppelrollo(test)

})