var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Rayure_maxHoehe1900",
    "produkt": "/doppelrollo/rayure-5002",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2300",
    "breite": "1200",
    "hoehe_new": "1900",
    "breite_new": "1200",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1900 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Remsa)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Rayure max. Höhe 1900', () => {

    configurator.configure_neg_doppelrollo(test)

})