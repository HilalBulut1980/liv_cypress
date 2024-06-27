var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Striscia_maxHoehe1500",
    "produkt": "/doppelrollo/striscia-5030",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2300",
    "breite": "1100",
    "hoehe_new": "1500",
    "breite_new": "1100",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1500 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Rayure oder Remsa)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Striscia max. Höhe 1500', () => {

    configurator.configure_neg_doppelrollo(test)

})