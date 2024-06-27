var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_minPaneelHöhen",
    "produkt": "/schiebegardinen/naru-7294",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2200",
    "breite": "3500",
    // "stoffposition": "1",
    "pan_anpassen": true,
    "hoehe_1": "150",
    "hoehe_2": "200",
    "hoehe_3": "210",
    "hoehe_correct": "300",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Höhe zwischen 300 mm und 3000 mm haben."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - min. Paneelhoehen', () => {

    configurator.configure_neg_schiebegardine2(test)

})