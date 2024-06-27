var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_DF_Roto_and.Typ_B_min",
    "produkt": "/rollo/silves-3693",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Roto",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "350",
    "df_fluegelhoehe": "1000",
    "df_fluegelbreite_new": "360",
    "df_fluegelhoehe_new": "1000",
    "message": "Die minimale Breite eines Rollos beträgt 360 mm."
}

describe('Test: configuration of neg DF Rollo test - Roto + anderer Typ min. Breite', () => {

    configurator.configure_neg_rollo(test)

})