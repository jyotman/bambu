# User Profiling
The project is made using Node.js/Express.js

# API
    POST /user

Request body -

    {
        "email": "jyotman@gmail.com",
        "data": [
            {
                "questionId": "5b2e7f42b2752a8a833efc22",
                "answerId": "5b2e7f42b2752a8a833efc21"
            },
            {
                "questionId": "5b2e7f84b2752a8a833efc29",
                "answerId": "5b2e7f84b2752a8a833efc28"
            }
        ]
    }

Response body -

    {
        "email": "jyotman@gmail.com",
        "data": [
            {
                "questionId": "5b2e7f42b2752a8a833efc22",
                "question": "Savings Amount?",
                "answer": {
                    "_id": "5b2e7f42b2752a8a833efc21",
                    "option": "10000",
                    "score": 5
                }
            },
            {
                "questionId": "5b2e7f84b2752a8a833efc29",
                "question": "Loan Amount?",
                "answer": {
                    "_id": "5b2e7f84b2752a8a833efc28",
                    "option": "0",
                    "score": 5
                }
            }
        ],
        "profile": "A"
    }

# Questions in database 

Query - 

    > db.questions.find().pretty()

Data -

    {
        "_id" : ObjectId("5b2e7f42b2752a8a833efc22"),
        "title" : "Savings Amount?",
        "options" : [
            {
                "_id" : ObjectId("5b2e7f42b2752a8a833efc1c"),
                "option" : "0",
                "score" : 0
            },
            {
                "_id" : ObjectId("5b2e7f42b2752a8a833efc1d"),
                "option" : "2000",
                "score" : 1
            },
            {
                "_id" : ObjectId("5b2e7f42b2752a8a833efc1e"),
                "option" : "4000",
                "score" : 2
            },
            {
                "_id" : ObjectId("5b2e7f42b2752a8a833efc1f"),
                "option" : "6000",
                "score" : 3
            },
            {
                "_id" : ObjectId("5b2e7f42b2752a8a833efc20"),
                "option" : "8000",
                "score" : 4
            },
            {
                "_id" : ObjectId("5b2e7f42b2752a8a833efc21"),
                "option" : "10000",
                "score" : 5
            }
        ],
        "createdAt" : ISODate("2018-06-23T17:11:30.425Z")
    }
    {
        "_id" : ObjectId("5b2e7f84b2752a8a833efc29"),
        "title" : "Loan Amount?",
        "options" : [
            {
                "_id" : ObjectId("5b2e7f84b2752a8a833efc23"),
                "option" : "10000",
                "score" : 0
            },
            {
                "_id" : ObjectId("5b2e7f84b2752a8a833efc24"),
                "option" : "8000",
                "score" : 1
            },
            {
                "_id" : ObjectId("5b2e7f84b2752a8a833efc25"),
                "option" : "6000",
                "score" : 2
            },
            {
                "_id" : ObjectId("5b2e7f84b2752a8a833efc26"),
                "option" : "4000",
                "score" : 3
            },
            {
                "_id" : ObjectId("5b2e7f84b2752a8a833efc27"),
                "option" : "2000",
                "score" : 4
            },
            {
                "_id" : ObjectId("5b2e7f84b2752a8a833efc28"),
                "option" : "0",
                "score" : 5
            }
        ],
        "createdAt" : ISODate("2018-06-23T17:12:36.229Z")
    }