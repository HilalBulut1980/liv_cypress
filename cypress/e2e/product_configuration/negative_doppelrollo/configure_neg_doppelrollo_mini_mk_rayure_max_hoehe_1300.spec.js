var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_klebenRayure_maxHoehe1300",
    "produkt": "/doppelrollo/rayure-5002",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "2300",
    "breite": "1500",
    "hoehe_new": "1300",
    "breite_new": "1500",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1300 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Remsa)."

}

describe('Test: configuration of neg Doppelrollo test - Mini m.K. Remsa max. Höhe 1300', () => {

    configurator.configure_neg_doppelrollo(test)

})