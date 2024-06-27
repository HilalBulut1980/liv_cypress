var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs7_oben_unten",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "400",
    "breite_unten": "300",
    "breite_oben_new": "120",
    "breite_unten_new": "400",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Test: configuration of neg Plissee test - VS7 Relation Oben Unten', () => {

    configurator.configure_neg_plissee(test)

})