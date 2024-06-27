module.exports = {

    configure_neg_rollo: function configure_neg_rollo(test) {

        it(test.name, function () {

            cy.intercept('GET', '/config/index/*').as('dfselect')

            cy.visit(test.produkt)

            loadConfigurator()
            setRolloTyp(test.rollotyp)
            setKassette(test.rollotyp, test.kassette)
            setSchiene(test.schiene)
            setBedienung(test.bedientyp)
            setMotortyp(test.motortyp)
            setHoehe(test.hoehe)
            setBreite(test.breite)
            setHersteller(test.df_hersteller)
            setProdukt(test.df_produkt)
            setTyp(test.df_typ)
            setFalzTyp(test.df_falzart)
            setFinnenBreite(test.df_fluegelbreite)
            setFinnenHoehe(test.df_fluegelhoehe)
            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setHoehe(test.hoehe_new)
            setBreite(test.breite_new)
            setFinnenBreite(test.df_fluegelbreite_new)
            setFinnenHoehe(test.df_fluegelhoehe_new)
            // cy.get('.error-msg').should('not.exist')
            cy.get('.error-msg').should('not.be.visible')
        })
    }
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function setRolloTyp(value) {
    cy.get('#type-selector-top > ul').children().contains(value).click({ force: true })
}

function setKassette(type, value) {
    if (typeof value != "undefined") {
        if (type == "Mini-Rollos") {
            cy.get('div[options-property="rollotyp"] > ul').children().contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
        }
        else {
            cy.get('div[options-property="kassette"] > ul').children().contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
        }
    }
}

function setSchiene(value) {
    if (typeof value != "undefined") {
        cy.get('div[options-property="fuehrungsschiene"] > ul').children().contains(value).click({ force: true })
    }
}

function setHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('#hoehe_in_mm input').clear().type(value)
    }
}

function setBreite(value) {
    if (typeof value != "undefined") {
        cy.get('#breite_in_mm input').clear().type(value)
    }
}

function setBedienung(value) {
    if (typeof value != "undefined") {
        cy.get('#bedienung-normal > div > ul').children().contains(value).click({ force: true })
    }
}

function setMotortyp(value) {
    if (typeof value !== "undefined" && typeof value != "undefined") {
        cy.get('div[options-property="motor"] > ul').children().contains(value).click({ force: true })
    }
}

function setHersteller(value) {
    if (typeof value != "undefined") {
        cy.contains(value).click()
    }
}

function setProdukt(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(1) select').select(value).wait('@dfselect')
    }
}

function setTyp(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(2) select').select(value).wait('@dfselect')
    }
}

function setFalzTyp(value) {
    if (typeof value != "undefined") {
        cy.get('[id="falztyp"]').children().contains(value).click()
    }
}

function setFinnenBreite(value) {
    if (typeof value != "undefined") {
        cy.get('#finnenbreite input').clear().type(value)
    }
}

function setFinnenHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('#finnenhoehe input').clear().type(value)
    }
}