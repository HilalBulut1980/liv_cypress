var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_neigung",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "500",
    "breite_oben": "300",
    "breite_unten": "2200",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 15° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS8 Neigung', () => {

    configurator.configure_neg_plissee(test)

})