var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_teilHoehe_max",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "2000",
    "teilhoehe": "2000",
    "teilhoehe_new": "1900",
    "breite_oben": "800",
    "breite_unten": "1500",
    "schienenfarbe": "Weiß",
    "message": "Die Teilhöhe muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 SD max. Teilhöhe', () => {

    configurator.configure_neg_plissee(test)

})