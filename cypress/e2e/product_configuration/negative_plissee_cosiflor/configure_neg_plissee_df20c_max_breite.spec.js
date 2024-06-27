var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20C_breite_max",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "2000",
    "df_glashoehe": "1200",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1300",
    "df_glasbreite_new": "1500",
    "df_glashoehe_new": "1200",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1500",
    "df_fluegelhoehe_new": "1300",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Breite eines Plissee beträgt 1500 mm."
}


describe('Test: configuration of neg Plissee test - DF20 Comfort max. Breite', () => {

    configurator.configure_neg_plissee(test)

})