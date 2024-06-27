var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Rayure_maxHoehe2300",
    "produkt": "/doppelrollo/rayure-5002",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2400",
    "breite": "1000",
    "hoehe_new": "2300",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 2300 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Remsa)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Rayure max. Höhe 2300', () => {

    configurator.configure_neg_doppelrollo(test)

})