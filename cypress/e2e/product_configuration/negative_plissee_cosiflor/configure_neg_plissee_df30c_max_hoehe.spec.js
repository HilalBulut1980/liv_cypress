var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_hoehe_max",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "900",
    "df_glashoehe": "2000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1900",
    "df_glashoehe_new": "1900",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Höhe eines Plissee beträgt 1900 mm."
}


describe('Test: configuration of neg Plissee test - DF30 Comfort max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})