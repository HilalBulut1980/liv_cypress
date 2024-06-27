var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_andererHersteller_H_max",
    "produkt": "/rollo/horizon-blackout-3266",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Anderer Hersteller",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1550",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "1500",
    "message": "Die maximale Höhe eines Rollos beträgt 1500 mm."
}

describe('Test: configuration of neg DF Rollo test - anderer Hersteller max. Hoehe', () => {

    configurator.configure_neg_rollo(test)

})