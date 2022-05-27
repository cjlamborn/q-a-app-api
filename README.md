# Q & A App

This Q & A App allows users to sign up and sign in, and post questions, see those questions, and post answers. Users can update and delete questions and also delete answers.

## App Screenshots

# Landing Page

<img width="663" alt="Screen Shot 2022-05-25 at 1 21 11 PM" src="https://media.git.generalassemb.ly/user/36739/files/34fd161c-4e5d-4d70-a38b-e0ed19603fe6">

# Landing Page Signed In

<img width="751" alt="Screen Shot 2022-05-27 at 9 14 34 AM" src="https://media.git.generalassemb.ly/user/36739/files/71f92806-4f39-49b1-9a76-6dc7bf5ef088">

# View Questions Edit Delete Options

<img width="902" alt="Screen Shot 2022-05-27 at 9 16 55 AM" src="https://media.git.generalassemb.ly/user/36739/files/3a5d9468-d8c7-468e-ab97-030a18c68887">

## Important Links
- [Client Repo](https://github.com/cjlamborn/q-a-app-client)
- [API Repo](https://github.com/cjlamborn/q-a-app-api)
- [Deployed API](https://desolate-tor-37361.herokuapp.com/)
- [Deployed Client]()

## ERD 

![qa-erd](https://media.git.generalassemb.ly/user/36739/files/b50078b5-9434-4455-89b1-b1d6e516a9e2)

# Technologies Used
Front End:

Javascript
CSS
HTML
SCSS
Visual Studio Code
JQUERY
AJAX
Modal

# Back End:

Express
MongoDB

# Installation
Fork and Clone the Repository
Checkout to a new branch
Run npm install 
Run npm run dev
Your site will be hosted at http://localhost:7165
Future Versions
- I hope to set it up so that multiple users can see each others questions and post answers to them too.


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/questions`           | `index`           |           
| POST   | `/questions`           | `create`          |
| POST   | `/answers`             | `create`          |
| PATCH  | `/questions/:id`       | `update`          |
| DELETE | `/questions/:id`       | `delete`          |

Installation
Download the template
CD into the new project and initialize with git init
create and checkout to a new branch
Run npm run start