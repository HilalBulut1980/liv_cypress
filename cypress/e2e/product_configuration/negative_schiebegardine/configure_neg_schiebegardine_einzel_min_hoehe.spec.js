var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_einzel_minH",
    "produkt": "/schiebegardinen/vilana-7305",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "hoehe": "299",
    "breite": "1000",
    "hoehe_new": "300",
    "message": "Die minimale Höhe einer Schiebegardine beträgt 300 mm."
}

describe('Test: configuration of neg Schiebegardine test - Einzelpaneel - min. Höhe', () => {

    configurator.configure_neg_schiebegardine(test)

})