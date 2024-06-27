var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Remsa_maxBreite1000",
    "produkt": "/doppelrollo/remsa-5064",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2200",
    "breite": "1500",
    "hoehe_new": "2200",
    "breite_new": "1000",
    "message": "Die maximale Breite eines Mini-Doppelrollos beträgt 1000 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Remsa max. Breite 1000', () => {

    configurator.configure_neg_doppelrollo(test)

})