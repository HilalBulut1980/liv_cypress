var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2-kleineHöheRechts",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "2000",
    "hoehe_rechts": "50",
    "hoehe_links_new": "600",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}


describe('Test: configuration of neg Plissee test - FS2 min. kleine Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})