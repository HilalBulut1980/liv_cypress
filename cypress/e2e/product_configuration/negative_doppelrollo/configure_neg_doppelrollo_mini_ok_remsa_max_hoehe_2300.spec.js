var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klemmen_Remsa_maxHoehe2300",
    "produkt": "/doppelrollo/remsa-5064",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo",
    "hoehe": "2400",
    "breite": "1000",
    "hoehe_new": "2300",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 2300 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini Remsa max. Höhe 2300', () => {

    configurator.configure_neg_doppelrollo(test)

})