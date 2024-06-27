var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_6-5",
    "produkt": "/schiebegardinen/ginella-7301",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "1500",
    "paneel_anzahl": "6",
    "paneel_anzahl_new": "5",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte reduzieren Sie die Anzahl der Paneele oder erhöhen Sie die Überlappung."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - Paneelanzahl 6 to 5', () => {

    configurator.configure_neg_schiebegardine(test)

})