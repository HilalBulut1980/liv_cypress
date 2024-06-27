var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20_finnenhoehe_min",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "1300",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "190",
    "df_glasbreite_new": "900",
    "df_glashoehe_new": "200",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "900",
    "df_fluegelhoehe_new": "200",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Flügelinnenhöhe eines Plissee beträgt 200 mm."
}


describe('Test: configuration of neg Plissee test - DF20 min. Finnenhöhe', () => {

    configurator.configure_neg_plissee(test)

})