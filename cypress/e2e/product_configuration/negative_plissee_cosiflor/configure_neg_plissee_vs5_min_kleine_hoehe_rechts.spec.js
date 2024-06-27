var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_dirL_hoehe_rechts_min",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "1000",
    "hoehe_rechts": "99",
    "hoehe_rechts_new": "100",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 min. kleine Hoehe rechts', () => {

    configurator.configure_neg_plissee(test)

})