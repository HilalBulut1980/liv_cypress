var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs10D_hoehe_max_wabe",
    "produkt": "/plissee/wabe-comfort-1465",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "1000",
    "hoehe_new": "1500",
    "ausrichtung": "links",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Plissee test - VS10 max. Höhe Wabe', () => {

    configurator.configure_neg_plissee(test)

})