import Cat from './common/_cat_service'
import {Factory} from '../fixtures/factory'

const URL_VOTES = '/votes' 

export class TheCatAPI extends Cat{
    
    static get_all_votes(token) {
        if (token === 'valid'){
            token ="741b084f-e5b3-4c35-a711-0ef70fd1bfa2"
    }
    let header = {"x-api-key": token}
    return super.httpRequestWithoutBody('GET', URL_VOTES, header)
    
    }

    static post_vote_by_type1(votes_type) {
        let body = Factory.postVote(votes_type)
        return super.httpRequestWithBody('POST', URL_VOTES, body)
    
    
    }
    
    
    
}

   

