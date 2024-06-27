var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs10D_breite_min",
    "produkt": "/plissee/airy-crush-1499",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "200",
    "breite_new": "300",
    "ausrichtung": "links",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - VS10 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})