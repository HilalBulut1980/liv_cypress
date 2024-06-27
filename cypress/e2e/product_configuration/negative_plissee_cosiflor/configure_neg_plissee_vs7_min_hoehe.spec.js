var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs7_hoehe_min",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "290",
    "hoehe_new": "300",
    "breite_oben": "500",
    "breite_unten": "1000",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS7 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})