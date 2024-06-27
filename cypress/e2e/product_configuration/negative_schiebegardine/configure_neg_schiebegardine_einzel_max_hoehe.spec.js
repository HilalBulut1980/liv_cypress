var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_einzel_maxH",
    "produkt": "/schiebegardinen/hanini-7322",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "hoehe": "3001",
    "breite": "1000",
    "hoehe_new": "3000",
    "message": "Die maximale Höhe einer Schiebegardine beträgt 3000 mm."
}

describe('Test: configuration of neg Schiebegardine test - Einzelpaneel - max. Höhe', () => {

    configurator.configure_neg_schiebegardine(test)

})