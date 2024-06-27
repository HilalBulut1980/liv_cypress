var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Modessa_maxHoehe1800",
    "produkt": "/doppelrollo/modessa-5101",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2400",
    "breite": "1000",
    "hoehe_new": "1800",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1800 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Modessa max. Höhe 1800', () => {

    configurator.configure_neg_doppelrollo(test)

})