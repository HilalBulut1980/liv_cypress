var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5sd_neigung_wabe",
    "produkt": "/plissee/wabe-punkte-1527",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe_links": "1200",
    "hoehe_rechts": "750",
    "hoehe_rechts_new": "700",
    "breite_oben": "200",
    "breite_unten": "1200",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 25° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS5 SD Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})