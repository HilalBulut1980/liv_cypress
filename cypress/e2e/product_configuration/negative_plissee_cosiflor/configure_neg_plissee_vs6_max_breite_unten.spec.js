var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6_breiteUnten_max",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "1000",
    "teilhoehe": "800",
    "breite_oben": "500",
    "breite_unten": "1550",
    "breite_unten_new": "1200",
    "schienenfarbe": "Weiß",
    "message": "Die untere Breite muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 max. Breite unten', () => {

    configurator.configure_neg_plissee(test)

})