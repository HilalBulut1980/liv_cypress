var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_4-3",
    "produkt": "/schiebegardinen/hanini-7321",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "1000",
    "paneel_anzahl": "4",
    "paneel_anzahl_new": "3",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte reduzieren Sie die Anzahl der Paneele oder erhöhen Sie die Überlappung."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - Paneelanzahl 4 to 3', () => {

    configurator.configure_neg_schiebegardine(test)

})