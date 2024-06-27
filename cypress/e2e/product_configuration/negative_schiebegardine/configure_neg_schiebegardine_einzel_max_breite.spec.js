var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_einzel_maxB",
    "produkt": "/schiebegardinen/mica-7342",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "hoehe": "3000",
    "breite": "1201",
    "breite_new": "1200",
    "message": "Die maximale Breite einer Schiebegardine beträgt 1200 mm."
}

describe('Test: configuration of neg Schiebegardine test - Einzelpaneel - max. Breite', () => {

    configurator.configure_neg_schiebegardine(test)

})