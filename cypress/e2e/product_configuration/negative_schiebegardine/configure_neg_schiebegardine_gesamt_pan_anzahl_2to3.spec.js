var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_2-3",
    "produkt": "/schiebegardinen/bonito-7338",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "3000",
    "paneel_anzahl": "2",
    "paneel_anzahl_new": "3",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte erhöhen Sie die Anzahl der Paneele oder reduzieren Sie die Überlappung."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - Paneelanzahl 2 to 3', () => {

    configurator.configure_neg_schiebegardine(test)

})