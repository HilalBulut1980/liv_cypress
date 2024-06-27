var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6_breiteOben_max",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "1000",
    "teilhoehe": "800",
    "breite_oben": "1450",
    "breite_unten": "1500",
    "breite_oben_new": "1350",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss kleiner als oder gleich 1400 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 max. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})