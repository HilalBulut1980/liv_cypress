var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Remsa_maxHoehe1500",
    "produkt": "/doppelrollo/remsa-5064",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "2300",
    "breite": "1400",
    "hoehe_new": "1500",
    "breite_new": "1400",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1500 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of neg Doppelrollo test - Mini m.K. Remsa max. Höhe 1500', () => {

    configurator.configure_neg_doppelrollo(test)

})