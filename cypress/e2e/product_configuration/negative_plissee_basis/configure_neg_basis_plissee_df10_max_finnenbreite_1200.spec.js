var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-Basis-df10_finnenbreite_max_1200",
    "produkt": "/plissee/flute-1142",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 1",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "1500",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1300",
    "df_fluegelhoehe": "1600",
    "df_glasbreite_new": "1000",
    "df_glashoehe_new": "1500",
    "df_falztiefe_new": "50",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "1500",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die maximale Höhe beträgt 2200 mm, wenn die Breite von 1200 mm nicht überschritten wird. Alternativ können wir Plissees bis zu einer Breite von 1500 mm fertigen, wenn die Höhe maximal 1500 mm beträgt."
}

describe('Test: configuration of neg Plissee test - Basis DF10 max. Finnenbreite 1200', () => {

    configurator.configure_neg_plissee(test)

})