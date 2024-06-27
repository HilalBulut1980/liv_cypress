var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_minPaneelBreiten",
    "produkt": "/schiebegardinen/siva-7311",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "4000",
    // "stoffposition": "1",
    "pan_anpassen": true,
    "breite_1": "150",
    "breite_2": "200",
    "breite_3": "250",
    "breite_4": "299",
    "breite_correct": "300",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - min. Paneelbreiten', () => {

    configurator.configure_neg_schiebegardine2(test)

})