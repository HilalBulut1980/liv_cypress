var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs1_hoehe_max3",
    "produkt": "/plissee/wabe-ballina-2140",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1600",
    "breite": "1300",
    "hoehe_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 1500 mm sein."   // Wabe-Eterno und Wabe-Ballina only till 1500 mm --> LIV-5484
}

describe('Test: configuration of neg Plissee test - VS1 max. Hoehe 1500 II', () => {

    configurator.configure_neg_plissee(test)

})