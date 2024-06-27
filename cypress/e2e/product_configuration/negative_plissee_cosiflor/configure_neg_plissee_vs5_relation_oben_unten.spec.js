var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_oben_unten",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe_links": "1200",
    "hoehe_rechts": "800",
    "breite_oben": "1200",
    "breite_unten": "1000",
    "breite_oben_new": "1000",
    "breite_unten_new": "1200",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Test: configuration of neg Plissee test - VS5 Relation Oben Unten', () => {

    configurator.configure_neg_plissee(test)

})