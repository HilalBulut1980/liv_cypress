var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Modessa_maxHoehe1100",
    "produkt": "/doppelrollo/modessa-5101",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "2400",
    "breite": "1000",
    "hoehe_new": "1100",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1100 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Striscia oder Rayure)."
}

describe('Test: configuration of neg Doppelrollo test - Mini m.K. Modessa max. Höhe 1100', () => {

    configurator.configure_neg_doppelrollo(test)

})