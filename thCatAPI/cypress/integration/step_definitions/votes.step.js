/// <reference types="cypress" />
import{When,Then,Given,And,But,Beffore} from 'cypress-cucumber-preprocessor/steps'
import {TheCatAPI} from '../../services/theCatApi.servise'

When(`request all /votes from using the {string} token`, (token) => {
	TheCatAPI.get_all_votes(token).then(votes =>{
		cy.wrap(votes).as('Response')
	})
});

When(`post the vote of type {string}`, (token) => {
	TheCatAPI.post_vote_by_type1(token).then(votes =>{
		cy.wrap(votes).as('Response')
	})
});

Then(`must be responsed the schema {string} with status {int}`, (schema, status) => {
	cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
    
});





