Feature:Tests votes on TheCatAPI
    @votes
    Scenario Outline: Requesting vote from API and validating contract
        When request all /votes from using the "<type>" token
        Then must be responsed the schema "get-vote" with status <status>
        Examples:
            | type    | status |
            | invalid | 401    |
            | valid   | 200    |
        
    @votes
    Scenario Outline: Posting vote on  API and validating the contract
        When post the vote of type "<type>"
        Then must be responsed the schema "post-vote" with status <status>
        Examples:
            | type    | status |
            | invalid | 400    |
            | valid   | 200    |
           
         
    @votes
    Scenario Outline: Requesting vote by id in API and validating contract
        When request all /votes from using the "<type>" token
        Then must be responsed the schema "get-vote" with status <status>
        Examples:
            | type    | status |
            | invalid | 401    |
            | valid   | 200    |
        