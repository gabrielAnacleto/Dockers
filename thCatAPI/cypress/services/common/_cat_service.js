export default class Cat {
    static httpRequestWithBody(method, endpoint, body, headers = {}, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: method,
            url: endpoint,
            body: body,
            headers: headers,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })

    }
    static httpRequestWithoutBody(method, endpoint, headers = {}, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: method,
            url: endpoint,
            headers: headers,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })
    }

}