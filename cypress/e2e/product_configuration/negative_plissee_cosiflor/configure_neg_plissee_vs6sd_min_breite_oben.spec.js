var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_breiteOben_min",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "breite_oben": "65",
    "breite_unten": "1000",
    "breite_oben_new": "70",
    "message": "Die obere Breite muss größer als oder gleich 70 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 SD min. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})