var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_neigung",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2500",
    "hoehe_rechts": "1800",
    "hoehe_links_new": "1500",
    "hoehe_rechts_new": "1200",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 5° und 35° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}


describe('Test: configuration of neg Plissee test - FS1 Neigung', () => {

    configurator.configure_neg_plissee(test)

})