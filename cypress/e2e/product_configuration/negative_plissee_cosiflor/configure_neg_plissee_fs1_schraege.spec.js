var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_schraege",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "500",
    "hoehe_links": "2000",
    "hoehe_rechts": "1000",
    "hoehe_links_new": "1500",
    "hoehe_rechts_new": "1200",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die sich ergebende Schräge darf maximal 1000 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}


describe('Test: configuration of neg Plissee test - FS1 Schraege', () => {

    configurator.configure_neg_plissee(test)

})