var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs7_breiteOben_min",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "50",
    "breite_unten": "1000",
    "breite_oben_new": "70",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss größer als oder gleich 70 mm sein."
}

describe('Test: configuration of neg Plissee test - VS7 min. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})