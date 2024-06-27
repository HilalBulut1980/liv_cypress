var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs10D_hoehe_min",
    "produkt": "/plissee/airy-crush-1499",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "100",
    "breite": "1000",
    "hoehe_new": "300",
    "ausrichtung": "links",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - VS10 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})