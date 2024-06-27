var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vssd5_dirL_hoehe_links_max",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "2200",
    "hoehe_links_new": "2000",
    "hoehe_rechts": "1500",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Die linke Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS5 SD max. Höhe links 2000', () => {

    configurator.configure_neg_plissee(test)

})