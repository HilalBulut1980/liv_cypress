var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_finnenhoehe_min",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "900",
    "df_glashoehe": "400",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "200",
    "df_fluegelhoehe_new": "400",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Flügelinnenhöhe eines Plissee beträgt 400 mm."
}

describe('Test: configuration of neg Plissee test - DF30 Comfort min. Finnenhöhe', () => {

    configurator.configure_neg_plissee(test)

})