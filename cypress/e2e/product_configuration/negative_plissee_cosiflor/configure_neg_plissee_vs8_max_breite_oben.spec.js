var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs8_breiteOben_max",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "1500",
    "breite_unten": "2000",
    "breite_oben_new": "1000",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als oder gleich 1450 mm sein."
}

describe('Test: configuration of neg Plissee test - VS8 max. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})