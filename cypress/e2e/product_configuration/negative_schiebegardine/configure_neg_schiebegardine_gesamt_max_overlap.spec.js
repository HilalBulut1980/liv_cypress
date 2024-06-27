var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_max_Überlappung",
    "produkt": "/schiebegardinen/aris-7353",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "1050",
    "paneel_anzahl": "2", 
    "overlap": "1051",
    "overlap_new": "1050",
    "message": "Die Überlappung darf die Breite der Schiebegardine (1050 mm) nicht überschreiten."
}

describe('Test: configuration of neg Schiebegardine test - Gesamtsystem - max. Overlap', () => {

    configurator.configure_neg_schiebegardine(test)

})