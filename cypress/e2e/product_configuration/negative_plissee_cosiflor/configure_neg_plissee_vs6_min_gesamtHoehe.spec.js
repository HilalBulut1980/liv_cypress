var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6_gesamtHoehe_min",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "50",
    "teilhoehe": "1200",
    "gesamthoehe_new": "2000",
    "breite_oben": "800",
    "breite_unten": "1500",
    "schienenfarbe": "Weiß",
    "message": "Die Gesamthöhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 min. Gesamthöhe', () => {

    configurator.configure_neg_plissee(test)

})