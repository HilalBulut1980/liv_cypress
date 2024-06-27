var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1-kleineHöheLinks",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "breite": "750",
    "hoehe_links": "70",
    "hoehe_rechts": "1200",
    "hoehe_links_new": "100",
    "hoehe_rechts_new": "500",
    "ausrichtung": "rechts",
    "message": "Die linke Höhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - FS1 min. kleine Höhe links', () => {

    configurator.configure_neg_plissee(test)

})