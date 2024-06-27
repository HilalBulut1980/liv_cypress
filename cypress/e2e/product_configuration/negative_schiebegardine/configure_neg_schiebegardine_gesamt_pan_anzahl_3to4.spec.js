var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_3-4",
    "produkt": "/schiebegardinen/valeska-7308",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "4000",
    "paneel_anzahl": "3",
    "paneel_anzahl_new": "4",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte erhöhen Sie die Anzahl der Paneele oder reduzieren Sie die Überlappung."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - Paneelanzahl 3 to 4', () => {

    configurator.configure_neg_schiebegardine(test)

})