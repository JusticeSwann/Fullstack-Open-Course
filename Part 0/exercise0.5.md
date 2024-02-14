## 0.5: Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server -->> browser: HTTP document

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server -->> browser: CSS document

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server -->> browser: Spa.js Document

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server -->> browser: Json Data

```