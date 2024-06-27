var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs9D_neigung",
    "produkt": "/plissee/lucid-1457",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "300",
    "hoehe_new": "1500",
    "breite_new": "1100",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 15° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS9D Neigung', () => {

    configurator.configure_neg_plissee(test)

})