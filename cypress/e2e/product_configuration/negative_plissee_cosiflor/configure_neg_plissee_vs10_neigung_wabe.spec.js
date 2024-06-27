var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs10D_neigung_wabe",
    "produkt": "plissee/wabe-comfort-1466",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1900",
    "breite": "300",
    "breite_new": "700",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 25° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS10 Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})