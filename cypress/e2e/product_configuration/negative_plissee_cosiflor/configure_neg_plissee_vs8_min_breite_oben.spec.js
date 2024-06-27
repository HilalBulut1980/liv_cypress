var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_breiteOben_min",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "50",
    "breite_unten": "1000",
    "breite_oben_new": "70",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss größer als oder gleich 70 mm sein."
}

describe('Test: configuration of neg Plissee test - VS8 min. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})