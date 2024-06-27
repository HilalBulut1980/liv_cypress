var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_10-9",
    "produkt": "/schiebegardinen/ukko-7329",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "2500",
    "paneel_anzahl": "10",
    "paneel_anzahl_new": "9",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte reduzieren Sie die Anzahl der Paneele oder erhöhen Sie die Überlappung."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - Paneelanzahl 10 to 9', () => {

    configurator.configure_neg_schiebegardine(test)

})