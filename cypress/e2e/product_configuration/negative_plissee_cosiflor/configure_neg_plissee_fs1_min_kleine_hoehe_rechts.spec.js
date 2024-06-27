var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1-kleineHöheRechts",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "breite": "800",
    "hoehe_links": "1500",
    "hoehe_rechts": "80",
    "hoehe_links_new": "500",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - FS1 min. kleine Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})