var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_andererHersteller_H_min",
    "produkt": "/rollo/basic-3008",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Anderer Hersteller",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "199",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "300",
    "message": "Die minimale Höhe eines Rollos beträgt 300 mm."
}

describe('Test: configuration of neg DF Rollo test - anderer Hersteller min. Hoehe', () => {

    configurator.configure_neg_rollo(test)

})