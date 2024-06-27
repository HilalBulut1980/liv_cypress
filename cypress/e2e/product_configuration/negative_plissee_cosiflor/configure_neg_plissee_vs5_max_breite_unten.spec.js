var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_breiteUnten_max",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "500",
    "breite_unten": "2000",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die untere Breite muss kleiner als oder gleich 1500 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 max. Breite unten', () => {

    configurator.configure_neg_plissee(test)

})