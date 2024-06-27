var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_breite_max",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "1501",
    "df_glashoehe": "1200",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1500",
    "df_fluegelhoehe": "1300",
    "df_glasbreite_new": "1450",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Breite eines Plissee beträgt 1500 mm."
}


describe('Test: configuration of neg Plissee test - DF30 Comfort max. Breite', () => {

    configurator.configure_neg_plissee(test)

})