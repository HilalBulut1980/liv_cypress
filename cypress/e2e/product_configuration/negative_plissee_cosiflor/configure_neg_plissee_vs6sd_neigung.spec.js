var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_neigung",
    "produkt": "/plissee/ruvido-1930",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite_oben": "200",
    "breite_unten": "1000",
    "gesamthoehe": "2000",
    "teilhoehe": "1900",
    "teilhoehe_new": "1890",
    "message": "Der Neigungswinkel muss zwischen 15° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS6 SD Neigung', () => {

    configurator.configure_neg_plissee(test)

})