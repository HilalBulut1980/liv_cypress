module.exports = {

    check_unitPrice: function check_unitPrice(value) {
        cy.get('span[class="cart-price"] > div > span[class="price"]').should("contain", value)
    },
    
    check_originUnitPrice: function check_originUnitPrice(value) {
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", value)
    },
    
    check_totalPrice: function check_totalPrice(value) {
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[class="price"]').should("contain", value)
    },
    
    check_originTotalPrice: function check_originTotalPrice(value) {
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", value)
    },
    
    check_unitSpecial: function check_unitSpecial(value) {  //for products without original price
        cy.get('span[class="cart-price"]').should("contain", value)
    },
    
    check_totalSpecial: function check_totalSpecial(value) { //for products without original price
        cy.get('span[class="cart-price cart-zwischensumme"]').should("contain", value)
    },

    checkVersandkosten: function checkVersandkosten(shippingCosts) {
        cy.get('.versandkosten_info + .price').should("contain", shippingCosts)
    },

    checkTotal: function checkTotal(total_end) {
        cy.contains('Gesamtsumme').parent().next().should("contain", total_end)
    }
}


