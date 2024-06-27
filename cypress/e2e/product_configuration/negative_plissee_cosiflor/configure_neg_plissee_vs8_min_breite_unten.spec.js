var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_breiteUnten_min",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "1000",
    "breite_unten": "200",
    "breite_oben_new": "120",
    "breite_unten_new": "300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die untere Breite muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS8 min. Breite unten', () => {

    configurator.configure_neg_plissee(test)

})