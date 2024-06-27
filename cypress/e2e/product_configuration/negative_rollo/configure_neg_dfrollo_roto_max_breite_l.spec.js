var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Roto_and.Typ_B_max",
    "produkt": "/rollo/basic-dimout-3027",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Roto",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "1150",
    "df_fluegelhoehe": "1000",
    "df_fluegelbreite_new": "1100",
    "df_fluegelhoehe_new": "1000",
    "message": "Die maximale Breite eines Rollos beträgt 1100 mm."
}

describe('Test: configuration of neg DF Rollo test - Roto + anderer Typ max. Breite', () => {

    configurator.configure_neg_rollo(test)

})