var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5-kleineHöheLinks",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "40",
    "hoehe_rechts": "1800",
    "hoehe_links_new": "100",
    "hoehe_rechts_new": "1500",
    "breite_oben": "400",
    "breite_unten": "1500",
    "breite_unten_new": "1200",
    "ausrichtung": "rechts",
    "message": "Die linke Höhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 min. kleine Hoehe links', () => {

    configurator.configure_neg_plissee(test)

})