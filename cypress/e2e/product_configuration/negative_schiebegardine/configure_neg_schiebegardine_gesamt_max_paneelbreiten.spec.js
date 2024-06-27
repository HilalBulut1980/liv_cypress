var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_maxPaneelBreiten",
    "produkt": "/schiebegardinen/lokela-7303",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "4000",
    "pan_anpassen": true,
    "breite_1": "1250",
    "breite_2": "1300",
    "breite_3": "1500",
    "breite_4": "1400",
    "breite_correct": "1200",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - max. Paneelbreiten', () => {

    configurator.configure_neg_schiebegardine2(test)

})