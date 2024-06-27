var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_breiteOben_min_wabe",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "50",
    "breite_unten": "1000",
    "breite_oben_new": "120",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss größer als oder gleich 120 mm sein."
}

describe('Test: configuration of neg Plissee test - VS8 min. Breite oben Wabe', () => {

    configurator.configure_neg_plissee(test)

})