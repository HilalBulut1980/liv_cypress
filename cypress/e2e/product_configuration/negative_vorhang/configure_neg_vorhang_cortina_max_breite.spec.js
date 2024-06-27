var configurator = require("../../../support/configurator_neg_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhang_Cortina_maxBreite",
    "produkt": "/vorhaenge/dekoschal/cortina",
    "farbe": "Maglia",
    "hoehe": "250",
    "breite": "500",
    "breite_new": "435",
    "message": "Die Breite muss kleiner als oder gleich 435 cm sein."
}

describe('Test: configuration of neg Vorhang - Cortina max. Breite', () => {

    configurator.configure_neg_vorhang(test)

})