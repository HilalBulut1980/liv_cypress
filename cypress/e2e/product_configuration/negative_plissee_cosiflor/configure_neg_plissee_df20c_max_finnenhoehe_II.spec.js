var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20C_finnenhoehe_max_1500",
    "produkt": "/plissee/wabe-eterno-2130",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "1300",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1550",
    "df_glasbreite_new": "900",
    "df_glashoehe_new": "1300",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "900",
    "df_fluegelhoehe_new": "1500",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Flügelinnenhöhe eines Plissee beträgt 1500 mm." // Wabe-Eterno und Wabe-Ballina only till 1500 mm --> LIV-5484
}

describe('Test: configuration of neg Plissee test - DF20 Comfort max. Finnenhöhe 1500mm', () => {

    configurator.configure_neg_plissee(test)

})