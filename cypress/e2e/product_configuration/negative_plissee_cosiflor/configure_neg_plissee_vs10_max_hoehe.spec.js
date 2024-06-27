var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs10D_hoehe_max",
    "produkt": "/plissee/airy-crush-1499",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "1000",
    "hoehe_new": "2000",
    "ausrichtung": "links",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS10 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})