var configurator = require("../../../support/configurator_neg_schiebegardine.js");

var test =
{
    "name": "LIVConfig. - Schiebegardine_einzel_minB",
    "produkt": "/schiebegardinen/ukko-7331",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "hoehe": "2500",
    "breite": "299",
    "breite_new": "300",
    "message": "Die minimale Breite einer Schiebegardine beträgt 300 mm."
}

describe('Test: configuration of neg Schiebegardine test - Einzelpaneel - min. Breite', () => {

    configurator.configure_neg_schiebegardine(test)

})