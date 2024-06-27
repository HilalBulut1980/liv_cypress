var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6_breiteUnten_min",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "1000",
    "teilhoehe": "800",
    "breite_oben": "70",
    "breite_unten": "290",
    "breite_unten_new": "300",
    "schienenfarbe": "Weiß",
    "message": "Die untere Breite muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 min. Breite unten', () => {

    configurator.configure_neg_plissee(test)

})