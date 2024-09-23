# How to start the application locally

Once you have cloned the repository, in your terminal, cd AppArch/frontend/BMFT then [npm start]() to launch the frontend.

To run the backend concurrently, split your terminal and cd AppArch/backend then [npm start](). Ensure that you have your IP address configured in MONGODB, otherwise the backend will not launch.

# Pages for text edits

For anyone modifying text with no experience using JSX, please look for the return statement in the frontend/BMFT/src/components folder. It will usually be followed by a <div> tag.

## Where to make edits:

### BIOPages

    - Board.js
    - Ourteam.js
    - Staff.js
    - Supporters.js

### GeneralFeatures

    - Biography

### MainPages
    
All files except Newsfeed.js. That component renders text from the backend. Please refer to the backend documentation.

### WWDFeatures

    - AgroProj.js
    - Building Stewards.js
    - Communitystewards.js
    - Outreach.js
    - WWDinfo.js

# Backend Interactions

For any backend interacting components, please refer to the 




