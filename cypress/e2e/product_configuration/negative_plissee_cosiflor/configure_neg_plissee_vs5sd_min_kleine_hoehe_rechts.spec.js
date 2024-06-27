var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5sd-kleineHöheRechts",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "2000",
    "hoehe_rechts": "95",
    "hoehe_rechts_new": "100",
    "breite_oben": "300",
    "breite_unten": "1200",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 SD min. kleine Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})