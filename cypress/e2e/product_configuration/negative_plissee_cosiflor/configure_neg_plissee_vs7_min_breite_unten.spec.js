var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs7_breiteUnten_min",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "200",
    "breite_unten": "290",
    "breite_unten_new": "300",
    "schienenfarbe": "Weiß",
    "message": "Die untere Breite muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS7 min. Breite unten', () => {

    configurator.configure_neg_plissee(test)

})