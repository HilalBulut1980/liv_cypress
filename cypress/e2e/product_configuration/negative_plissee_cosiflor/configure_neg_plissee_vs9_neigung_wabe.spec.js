var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs9D_neigung_wabe",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "300",
    "breite": "1300",
    "hoehe_new": "300",
    "breite_new": "500",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 25° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS9 Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})