var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20C_hoehe_min",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "200",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1300",
    "df_glasbreite_new": "900",
    "df_glashoehe_new": "400",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "900",
    "df_fluegelhoehe_new": "400",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Höhe eines Plissee beträgt 400 mm."
}


describe('Test: configuration of neg Plissee test - DF20 Comfort min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})