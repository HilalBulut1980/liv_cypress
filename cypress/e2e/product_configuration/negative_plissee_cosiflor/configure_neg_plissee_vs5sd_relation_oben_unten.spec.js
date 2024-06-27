var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5sd_oben_unten",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe_links": "1200",
    "hoehe_rechts": "800",
    "breite_oben": "900",
    "breite_unten": "500",
    "breite_oben_new": "500",
    "breite_unten_new": "900",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Test: configuration of neg Plissee test - VS5 SD Relation Oben Unten', () => {

    configurator.configure_neg_plissee(test)

})