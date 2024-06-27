module.exports = {

    configure_neg_vorhang: function configure_neg_vorhang(test) {

        it(test.name, function () {

            cy.visit(test.produkt)
            setFarbe(test.farbe)
            setBreite(test.breite)
            setHoehe(test.hoehe)

            checkMessage(test.message)

            setBreite(test.breite_new)
            setHoehe(test.hoehe_new)

            checkVanishedMessage()
        })
    }
}

function checkMessage(message) {
    cy.get('.error-messages.ng-active').should('be.visible').and('contain', message)
}

function checkVanishedMessage() {
    cy.get('.error-messages').should('not.be.visible')
}

function setFarbe(value) {
    if (typeof value != "undefined") {
        cy.get('#farbe img[alt=' + value + ']').click() //multiple true is only needed @Stoff: Signa
    }
}

function setBreite(value) {
    if (typeof value != "undefined") {
        cy.get('body').then((body) => {
            if (body.find('#breite > div > input').length > 0) { //if inputfield breite exists
                cy.get('#breite > div > input')
                    .then($element => {
                        if ($element.is(':hidden')) {
                            cy.wrap($element).siblings('ul').children().contains(value).click()
                        }
                        else {
                            cy.wrap($element).clear().type(value)
                        }
                    })
            }
            else { // only needed for Vorhang Cortinella --> inputfield breite does not exist
                cy.get('#breite > .content > ul > li').contains(value).click()
            }
        })
    }
}

function setHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('body').then((body) => {
            if (body.find('#hoehe > .content > input').length > 0) {
                cy.get('#hoehe > .content > input').clear().type(value)
            }
            else {
                cy.get('#hoehe > .content').children('ul').children('li').contains(value).click()
            }
        })
    }
}

