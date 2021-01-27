# Draft Anything App ... 

<strong>grand plans, but really only a football player admin portal at this point (Dec 18, 20)</strong>

The description of the app idea is on the homepage of the client. Unfortunately, it doesn't do all of that (yet?)

The app includes a resource "players" with which a logged in user can view/add/edit/delete football players.

If you decide to run the app, there are some sample players in players.json. Including the espnId provides for 
a headshot image of the player.

Using the Players link from the navigation shows all players. Clicking a player image goes to an individual 
player page. The PlayerCard component is used on both all and individual views.

The draft board under Drafts in the navigation is simply a placeholder, contains a static draft board. Future 
enhancement, each draft pick would be its own component.

<hr />

# yahoo-fantasy references
- https://yahoo-fantasy-node-docs.vercel.app/
- https://developer.yahoo.com/apps

# Project Starter files

## Includes:

- API
  - User CRUD (Create, Read, Update, Delete)
  - Session Authentication
    - Passport Local strategy
    - Passport JWT strategy
  - Error handling
  - Mongoose configuration
  - All required node packages
    - dotenv
    - express
    - express-session
    - cors
    - mongoose
    - body-parser
    - jsonwebtoken
    - passport
    - passport-jwt
    - passport-local
    - passport-local-mongoose
- Client
  - User CRUD components
  - Authentication components
  - Shared navigation component
    - Helper for using React Router DOM Link component with React Bootstrap component
  - Global provider for across application variable store
  - Notification provider for across application message system
  - User provider for across application user access
  - All required node packages
    - axios
    - bootstrap
    - react
    - react-bootstrap
    - react-dom
    - react-router-dom
    - react-scripts
    - styled-components

---
## Installation

### API
```shell
npm install
```

> To run:
```shell
npm run dev
```

> Add your .env file with your Atlas Cloud MongoDB credentials
```json
DB_URI="mongodb+srv://comp-2068.efkcg.mongodb.net/<database name>?retryWrites=true&w=majority"
DB_USER="<database username>"
DB_PASS="<database password>"
```
> Replace **\<config option\>** with the corresponding data

### Client
```shell
yarn
```

> To run:
```shell
yarn start
```

> When you are ready to deploy you will need to build it first:
```shell
yarn build
```