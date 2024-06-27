var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_maxPaneelHöhen",
    "produkt": "/schiebegardinen/draga-7289",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2200",
    "breite": "3500",
    // "stoffposition": "1",
    "pan_anpassen": true,
    "hoehe_1": "3001",
    "hoehe_2": "3500",
    "hoehe_3": "3300",
    "hoehe_correct": "3000",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Höhe zwischen 300 mm und 3000 mm haben."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - max. Paneelhoehen', () => {

    configurator.configure_neg_schiebegardine2(test)

})