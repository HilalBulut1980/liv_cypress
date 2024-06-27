var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s1_min_smallHeight_right",
    "produkt": "/plissee/lunara-1689",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1500",
    "hoehe_links": "1500",
    "hoehe_rechts": "50",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}

describe('Test: configuration of neg Plissee test - VS4S1 min. small height right', () => {

    configurator.configure_neg_plissee(test)

})