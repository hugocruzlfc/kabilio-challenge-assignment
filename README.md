# Welcome to Project!

## Getting Started

Clone the repo and create .env file with the following content:

```shellscript
 touch .env && echo "DATABASE_URL=postgresql://postgres:postgres@localhost:5433/emailmanager_db?schema=public" > .env
```

Make sure you have docker installed and start the database:

```shellscript
docker compose up -d
```

Install dependencies:

```shellscript
npm install
```

## Development

Run the dev server:

```shellscript
npm run dev
```

## Understanding the project

This project is a simple email manager. It has a list of emails and you can add simulating a user and delete and update status if you are an admin.

The project has 3 main routes.

“/” the landing page to create the emails, simulating that it is a random user who enters the app.

“/admin-dashboard” for the core of the app where the administrator reviews the available emails. He has the possibility to filter them, paginate them and see their details.

“/email-details” where the administrator can read the emails.

## Workflow

Create a few emails, preferably more than 9 if you want to play with pagination.

Then, navigate to the “/admin-dashboard” address and work as administrator.
