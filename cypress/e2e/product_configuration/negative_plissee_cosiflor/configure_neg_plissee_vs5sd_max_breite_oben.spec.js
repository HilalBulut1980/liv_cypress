var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5sd_breiteOben_max",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "hoehe_rechts_new": "1300",
    "breite_oben": "1200",
    "breite_unten": "500",
    "breite_oben_new": "700",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss kleiner als oder gleich 950 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 SD max. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})