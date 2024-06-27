var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s1_neigung",
    "produkt": "/plissee/wabe-casato-blackout-4415",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "750",
    "hoehe_links": "1700",
    "hoehe_rechts": "1000",
    "hoehe_rechts_new": "1110",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 5° und 40° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - VS4S1 neigung', () => {

    configurator.configure_neg_plissee(test)

})