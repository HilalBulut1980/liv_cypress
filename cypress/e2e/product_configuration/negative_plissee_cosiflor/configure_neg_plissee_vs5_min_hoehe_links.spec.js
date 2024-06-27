var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs5_dirL_hoehe_links_min",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "99",
    "hoehe_rechts": "1500",
    "hoehe_links_new": "1900",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 min. Höhe links', () => {

    configurator.configure_neg_plissee(test)

})