var configurator = require("../../../support/configurator_neg_doppelrollo.js");

var test =
{
    "name": "LIVConfig. - doppelMini_kleben_Striscia_maxHoehe1000",
    "produkt": "/doppelrollo/striscia-5030",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1100",
    "breite": "1100",
    "hoehe_new": "1000",
    "breite_new": "1100",
    "message": "Die maximale Höhe eines Mini-Doppelrollos beträgt bei diesem Stoff 1000 mm. Bitte wählen Sie einen anderen Doppelrollo Typ (\"Doppelrollo ohne Kassette\" oder \"Doppelrollo mit Kassette\") oder einen anderen Stoff (Rayure oder Remsa)."
}

describe('Test: configuration of NEG Doppelrollo test - Mini m.K. Striscia max. Höhe 1000', () => {

    configurator.configure_neg_doppelrollo(test)

})