var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs3SD_hoehe_min",
    "produkt": "/plissee/freja-1772",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "150",
    "breite": "1000",
    "hoehe_new": "200",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss größer als oder gleich 200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS3 SD min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})