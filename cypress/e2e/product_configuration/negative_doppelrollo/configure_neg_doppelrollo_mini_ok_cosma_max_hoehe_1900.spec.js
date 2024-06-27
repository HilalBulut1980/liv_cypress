var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Cosma_maxHoehe1900",
    "produkt": "/doppelrollo/cosma-5086",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2300",
    "breite": "1200",
    "hoehe_new": "1900",
    "breite_new": "1200",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1900 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Cosma max. Höhe 2100', () => {

    configurator.configure_neg_doppelrollo(test)

})