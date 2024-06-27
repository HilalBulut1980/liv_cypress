var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df30C_flügel_glas_hoehe",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "1000",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "900",
    "df_glashoehe_new": "900",
    "df_fluegelhoehe_new": "1000",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die Flügelhöhe darf nicht kleiner als die Glashöhe sein."
}

describe('Test: configuration of neg Plissee test - DF30 Comfort Relation Höhe Glas Flügel', () => {

    configurator.configure_neg_plissee(test)

})