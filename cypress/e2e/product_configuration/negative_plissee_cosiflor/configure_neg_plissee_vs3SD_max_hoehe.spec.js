var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs3SD_hoehe_max",
    "produkt": "/plissee/color-breeze-1360",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2300",
    "breite": "1000",
    "hoehe_new": "2200",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2200 mm sein."
}

describe('Test: configuration of neg Plissee test - VS3 SD max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})