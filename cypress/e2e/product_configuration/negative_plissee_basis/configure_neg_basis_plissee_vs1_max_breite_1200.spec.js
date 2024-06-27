var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-vs1-breite_max_1200",
    "produkt": "/plissee/timeless-4106",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "2200",
    "breite": "1500",
    "hoehe_new": "2200",
    "breite_new": "1200",
    "schienenfarbe": "Silber",
    "message": "Die maximale Höhe beträgt 2200 mm, wenn die Breite von 1200 mm nicht überschritten wird. Alternativ können wir Plissees bis zu einer Breite von 1500 mm fertigen, wenn die Höhe maximal 1500 mm beträgt."
}

describe('Test: configuration of neg Plissee test - Basis VS1 max. Breite 1200', () => {

    configurator.configure_neg_plissee(test)

})