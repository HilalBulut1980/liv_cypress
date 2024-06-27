var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_breiteOben_min_wabe",
    "produkt": "/plissee/wabe-casato-blackout-4413",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "breite_oben": "115",
    "breite_unten": "1000",
    "breite_oben_new": "120",
    "message": "Die obere Breite muss größer als oder gleich 120 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 SD min. Breite oben Wabe', () => {

    configurator.configure_neg_plissee(test)

})