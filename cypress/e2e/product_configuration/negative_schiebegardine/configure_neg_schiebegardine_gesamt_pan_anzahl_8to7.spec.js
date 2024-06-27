var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_8-7",
    "produkt": "/schiebegardinen/philo-7323",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "2000",
    "paneel_anzahl": "8",
    "paneel_anzahl_new": "7",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte reduzieren Sie die Anzahl der Paneele oder erhöhen Sie die Überlappung."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - Paneelanzahl 8 to 7', () => {

    configurator.configure_neg_schiebegardine(test)

})