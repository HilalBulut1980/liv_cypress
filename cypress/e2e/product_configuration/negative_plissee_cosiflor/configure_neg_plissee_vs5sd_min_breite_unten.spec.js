var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5sd_breiteUnten_min",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "500",
    "breite_unten": "295",
    "breite_oben_new": "100",
    "breite_unten_new": "300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die untere Breite muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 SD min. Breite unten', () => {

    configurator.configure_neg_plissee(test)

})