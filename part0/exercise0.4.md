## 0.4: New note diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/notes
    server -->> browser : HTTP document

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server -->> browser: CSS document

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server -->> browser: Main Javascript document
    Note right of browser: Browser starts executing js code that fetches json data from the server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server -->> browser: the Json data
    Note right of browser: Browser executes callback function that renders notes

```