module.exports = {

    configure_neg_schiebegardine: function configure_neg_schiebegardine(test) {

        it(test.name, function () {

            cy.visit(test.produkt)
            loadConfigurator()
            setSchiebegardineTyp(test.modell)
            setBreite(test.breite)
            setHoehe(test.hoehe)
            setAnzahlPaneele(test.paneel_anzahl)
            setOverlap(test.overlap)

            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setBreite(test.breite_new)
            setHoehe(test.hoehe_new)
            setAnzahlPaneele(test.paneel_anzahl_new)
            setOverlap(test.overlap_new)

            cy.get('.error-msg').should('not.exist')
        })
    },

    configure_neg_schiebegardine2: function configure_neg_schiebegardine2(test) {

        it(test.name, function () {

            cy.visit(test.produkt)
            loadConfigurator()
            setSchiebegardineTyp(test.modell)
            setBreite(test.breite)
            setHoehe(test.hoehe)

            checkPaneelBreiten(test.pan_anpassen, test.breite_1, test.breite_2, test.breite_3, test.breite_4, test.breite_5, test.breite_6, test.breite_7, test.breite_8, test.message, test.breite_correct)
            checkPaneelHoehen(test.hoehe_1, test.hoehe_2, test.hoehe_3, test.hoehe_4, test.hoehe_5, test.hoehe_6, test.hoehe_7, test.hoehe_8, test.message, test.hoehe_correct)
        })
    }
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function setSchiebegardineTyp(value) {
    cy.get('#type-selector > div > ul').children().contains(value).click({ force: true })
}

function setBreite(value) {
    if (typeof value !== "undefined") {
        cy.get('#breite_in_mm input').clear().type(value)
    }
}

function setHoehe(value) {
    if (typeof value !== "undefined") {
        cy.get('#hoehe_in_mm input').clear().type(value)
    }
}

function setAnzahlPaneele(value) {
    if (typeof value !== "undefined") {
        cy.get('#paneelnumber input').clear().type(value)
    }
}

function checkPaneelBreiten(checkValue, breite1, breite2, breite3, breite4, breite5, breite6, breite7, breite8, message, breite_correct) {

    var breiten = [breite1, breite2, breite3, breite4, breite5, breite6, breite7, breite8]

    if (checkValue) {

        // 'Paneele individualisieren' aktivieren
        cy.get('#check_individual input').should('be.visible')
        cy.get('#check_individual input').check({ force: true })
        cy.get('#check_individual input').should('be.checked')

        for (var j = 1, i = 0; i <= 7; i++, j++) {
            if (typeof breiten[i] !== "undefined") {
                cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').clear().type(breiten[i])
                cy.get('.errors-container > .ng-active > .error-msg').should('be.visible').and('contain', message)

                // type in correct width
                cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').clear().type(breite_correct)
                cy.get('.errors-container > .ng-active > .error-msg').should('not.exist')
            }
        }
    }
}

function checkPaneelHoehen(hoehe1, hoehe2, hoehe3, hoehe4, hoehe5, hoehe6, hoehe7, hoehe8, message, hoehe_correct) {

    var hoehen = [hoehe1, hoehe2, hoehe3, hoehe4, hoehe5, hoehe6, hoehe7, hoehe8]

    for (var j = 1, i = 0; i <= 7; i++, j++) {
        if (typeof hoehen[i] !== "undefined") {
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').clear().type(hoehen[i])
            cy.get('.errors-container > .ng-active > .error-msg').should('be.visible').and('contain', message)

            // type in correct height
            cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').clear().type(hoehe_correct)
            cy.get('.errors-container > .ng-active > .error-msg').should('not.exist')
        }
    }
}

function setOverlap(value) {
    if (typeof value !== "undefined") {
        cy.get('#paneeloverlap input').clear().type(value)
    }
}