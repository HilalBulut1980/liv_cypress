var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds3_neigung_wabe",
    "produkt": "plissee/wabe-comfort-1466",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS3",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "300",
    "hoehe_new": "1050",
    "breite_new": "1300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 5° und 40° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - FDS3 Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})