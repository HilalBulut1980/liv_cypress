var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_breiteOben_max",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "1000",
    "teilhoehe": "800",
    "breite_oben": "1490",
    "breite_unten": "1500",
    "breite_oben_new": "1300",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss kleiner als oder gleich 1400 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 SD max. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})