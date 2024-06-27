var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-df20C_flügel_glas_hoehe",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "900",
    "df_glasbreite_new": "1000",
    "df_glashoehe_new": "900",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "1000",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die Flügelhöhe darf nicht kleiner als die Glashöhe sein."
}

describe('Test: configuration of neg Plissee test - DF20 Comfort Relation Höhe Glas Flügel', () => {

    configurator.configure_neg_plissee(test)

})