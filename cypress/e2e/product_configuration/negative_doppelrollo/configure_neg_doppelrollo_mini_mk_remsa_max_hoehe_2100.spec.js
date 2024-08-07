var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Remsa_maxHoehe2100",
    "produkt": "/doppelrollo/remsa-5064",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "2300",
    "breite": "1100",
    "hoehe_new": "2100",
    "breite_new": "1100",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 2100 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

    describe('Test: configuration of neg Doppelrollo test - Mini m.K. Remsa max. Höhe 2100', () => {

        configurator.configure_neg_doppelrollo(test)

    })