var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_breiteOben_max",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "hoehe_rechts_new": "1300",
    "breite_oben": "1500",
    "breite_unten": "500",
    "breite_oben_new": "1450",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss kleiner als oder gleich 1450 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 max. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})