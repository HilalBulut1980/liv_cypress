var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs6sd_gesamtHoehe_max",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "gesamthoehe": "2100",
    "teilhoehe": "1200",
    "gesamthoehe_new": "2000",
    "breite_oben": "800",
    "breite_unten": "1500",
    "schienenfarbe": "Weiß",
    "message": "Die Gesamthöhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS6 SD max. Gesamthöhe', () => {

    configurator.configure_neg_plissee(test)

})