AppUrl - http://localhost:8000

======================================= Authors ========================================

1. Create Author - 

url - /authors/
Method - POST
Headers - 
    {
        "Content-type": "application/json"
    }
Request - 
    {
	    "name": "Charles Dickens"
    }
Response - 
    {
        "status": true,
        "author": {
            "_id": "5abced7fd5af334e13558bd8",
            "name": "Charles Dickens",
            "__v": 0
        }
    }


2. Get all Authors

url - /authors/
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response - 
    {
        "status": true,
        "authors": [
            {
                "_id": "5abced54d5af334e13558bd7",
                "name": "J. K. Rowling",
                "__v": 0
            }
        ]
    }


3. Get Author by ID

url - /authors/id
sampleUrl - /authors/5abced54d5af334e13558bd7
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response - 
    {
        "status": true,
        "author": {
            "_id": "5abced54d5af334e13558bd7",
            "name": "J. K. Rowling",
            "__v": 0
        }
    }


4. Remove Author by ID

url - /authors/id
sampleUrl - /authors/5abe19b97902484f96419089
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response - 
    {
        "status": true,
        "author": {
            "_id": "5abe19b97902484f96419089",
            "name": "J. K. Rowling",
            "__v": 0
        },
        "books": [
            {
                "_id": "5abe061908e71847a5e6e1db",
                "name": "Harry Potter and the Half-Blood Prince",
                "authorId": "5abe19b97902484f96419089",
                "__v": 0
            },
            {
                "_id": "5abdf3aa75368c4101ef9b49",
                "name": "Harry Potter and the Goblet of Fire",
                "authorId": "5abe19b97902484f96419089",
                "__v": 0
            }
        ]
    }

5. Update Author by ID

url - /books/id
sampleUrl - /books/5abde6f514379338a78211fe
Method - POST
Headers - 
    {
        "Content-type": "application/json"
    }
Request - 
    {
        "name": "JK Rowling",
    }
Response -
    {
        "status": true,
        "author": {
            "_id": "5abde6f514379338a78211fe",
            "name": "JK Rowling",
            "__v": 0
        }
    }

========================================= Books ==========================================

6. Create Book

url - /books/
Method - POST
Headers - 
    {
        "Content-type": "application/json"
    }
Request - 
    {
        "name": "The Invisible Man",
        "authorId": "5abdf48114a25e415bb4e709" // Valid Author ID
    }
Response - 
    {
        "status": true,
        "book": {
            "_id": "5abdf4b214a25e415bb4e70b",
            "name": "The Invisible Man",
            "authorId": "5abdf48114a25e415bb4e709",
            "__v": 0
        },
        "author": "Charles Dickens"
    }


7. Get all Books

url - /books/
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response -
    {
        "status": true,
        "books": [
            {
                "_id": "5abdf3aa75368c4101ef9b49",
                "name": "Harry Potter and the Goblet of Fire",
                "authorId": "5abde6f514379338a78211fe",
                "__v": 0
            },
            {
                "_id": "5abdf3bc75368c4101ef9b4a",
                "name": "Harry Potter and the Chamber of Secrets",
                "authorId": "5abde6f514379338a78211fe",
                "__v": 0
            },
            {
                "_id": "5abdf3f314a25e415bb4e708",
                "name": "Harry Potter and the Half-Blood Prince",
                "authorId": "5abde6f514379338a78211fe",
                "__v": 0
            },
            {
                "_id": "5abdf4a614a25e415bb4e70a",
                "name": "Journey to the Center of the Earth",
                "authorId": "5abdf48114a25e415bb4e709",
                "__v": 0
            },
            {
                "_id": "5abdf4b214a25e415bb4e70b",
                "name": "The Invisible Man",
                "authorId": "5abdf48114a25e415bb4e709",
                "__v": 0
            }
        ]
    }

8. Get Book by ID

url - /books/id
sampleUrl - /books/5abdf3aa75368c4101ef9b49
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response -
    {
        "status": true,
        "book": {
            "_id": "5abdf3aa75368c4101ef9b49",
            "name": "Harry Potter and the Goblet of Fire",
            "authorId": "5abde6f514379338a78211fe",
            "__v": 0
        }
    }

9. Get Books By Author ID

url - /books/author/authorId
sampleUrl - /books/author/5abde6f514379338a78211fe
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response -
    {
        "status": true,
        "author": "J. K. Rowling",
        "books": [
            {
                "_id": "5abdf3aa75368c4101ef9b49",
                "name": "Harry Potter and the Goblet of Fire",
                "authorId": "5abde6f514379338a78211fe",
                "__v": 0
            },
            {
                "_id": "5abdf3bc75368c4101ef9b4a",
                "name": "Harry Potter and the Chamber of Secrets",
                "authorId": "5abde6f514379338a78211fe",
                "__v": 0
            }
        ]
    }

10. Delete Book by ID

url - /books/id
sampleUrl - /books/5abdf3bc75368c4101ef9b4a
Method - GET
Headers - 
    {
        "Content-type": "application/json"
    }
Response -
    {
        "status": true,
        "book": {
            "_id": "5abdf3bc75368c4101ef9b4a",
            "name": "Harry Potter and the Chamber of Secrets",
            "authorId": "5abde6f514379338a78211fe",
            "__v": 0
        }
    }

11. Update Book by ID

url - /books/id
sampleUrl - /books/5abdf3aa75368c4101ef9b49
Method - GET
Request - 
    {
        "authorId": "5abde6f514379338a78211fe"
    }
Headers - 
    {
        "Content-type": "application/json"
    }
Response -
    {
        "status": true,
        "author": "J. K. Rowling",
        "book": {
            "_id": "5abdf3aa75368c4101ef9b49",
            "name": "Harry Potter and the Goblet of Fire",
            "authorId": "5abde6f514379338a78211fe",
            "__v": 0
        }
    }