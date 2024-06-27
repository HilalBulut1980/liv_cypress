var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20_finnenhoehe_max",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "1300",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "2000",
    "df_glasbreite_new": "900",
    "df_glashoehe_new": "1600",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "900",
    "df_fluegelhoehe_new": "1600",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Flügelinnenhöhe eines Plissee beträgt 1600 mm."
}


describe('Test: configuration of neg Plissee test - DF20 max. Finnenhöhe', () => {

    configurator.configure_neg_plissee(test)

})