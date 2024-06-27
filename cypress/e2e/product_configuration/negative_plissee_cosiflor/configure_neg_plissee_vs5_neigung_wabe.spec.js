var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_neigung_wabe",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "1200",
    "hoehe_rechts_new": "850",
    "breite_oben": "200",
    "breite_unten": "1500",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 25° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS5 Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})