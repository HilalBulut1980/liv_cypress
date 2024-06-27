var configurator = require("../../../support/configurator_neg_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo_Braun_maxHoehe",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "befestigung": "Am Fensterrahmen",
    "farbe": "Braun",
    "netzfarbe": "schwarz",
    "hoehe": "2500",
    "breite": "1600",
    "hoehe_new": "2400",
    "breite_new": "1600",
    "vorrichtung": "Hakenleiste",
    "message": "Die Höhe muss kleiner als oder gleich 2400 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Rollo braun max. Höhe', () => {

    configurator.configure_neg_insektenschutzrollo(test)

})