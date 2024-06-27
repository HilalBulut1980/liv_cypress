var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_teilHoehe_min",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "500",
    "teilhoehe": "99",
    "teilhoehe_new": "100",
    "breite_oben": "400",
    "breite_unten": "1000",
    "schienenfarbe": "Weiß",
    "message": "Die Teilhöhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 SD min. Teilhöhe', () => {

    configurator.configure_neg_plissee(test)

})