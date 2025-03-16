# Activity in IT 3103A

This project consists of two microservices:

Users Service – Manages user data.

Posts Service – Manages posts data.

Each service has its own database, utilizes Prisma for database migrations, and exposes GraphQL endpoints using Apollo Server for CRUD operations.

~ Reflection ~

What do database migrations do and why are they useful?

Database migrations keep track of changes to the database structure, like adding or modifying tables. They help ensure the database stays consistent across different environments (development, testing, and production) and allow you to undo changes if needed.

How does GraphQL differ from REST for CRUD operations?

GraphQL lets clients request exactly the data they need, avoiding unnecessary data transfer. Unlike REST, which uses multiple endpoints for different actions, GraphQL provides a single endpoint where clients can send flexible queries and get customized responses.
