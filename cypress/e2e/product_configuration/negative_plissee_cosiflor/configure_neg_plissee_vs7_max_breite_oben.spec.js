var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs7_breiteOben_max",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "1450",
    "breite_unten": "2000",
    "breite_oben_new": "1400",
    "breite_unten_new": "1500",
    "message": "Die obere Breite muss kleiner als oder gleich 1400 mm sein."
}

describe('Test: configuration of neg Plissee test - VS7 max. Breite oben', () => {

    configurator.configure_neg_plissee(test)

})