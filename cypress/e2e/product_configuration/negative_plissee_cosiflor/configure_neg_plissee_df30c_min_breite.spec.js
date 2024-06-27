var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_breite_min",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "100",
    "df_glashoehe": "1200",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1300",
    "df_glasbreite_new": "250",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Breite eines Plissee beträgt 250 mm."
}


describe('Test: configuration of neg Plissee test - DF30 Comfort min. Breite', () => {

    configurator.configure_neg_plissee(test)

})