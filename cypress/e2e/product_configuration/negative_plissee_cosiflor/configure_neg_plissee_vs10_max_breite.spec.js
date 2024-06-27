var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs10D_breite_max",
    "produkt": "/plissee/airy-crush-1499",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "1500",
    "breite_new": "1200",
    "ausrichtung": "links",
    "message": "Die Breite muss kleiner als oder gleich 1200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS10 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})