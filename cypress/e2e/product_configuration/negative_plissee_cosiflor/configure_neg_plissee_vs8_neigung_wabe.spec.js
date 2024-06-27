var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_neigung_wabe",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "500",
    "breite_oben": "500",
    "breite_unten": "2000",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 25° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS8 Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})