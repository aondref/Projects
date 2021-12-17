# Projects


Docker Stuff
docker run --name [add name] -e POSTGRES_PASSWORD [add password] -d -p 5432:5432 postgres:alpine
docker exec -it postgres_projects bash
-U postgres

Connect to database using sql commands: \c [name of database]
psql sign-in: postgres_projects
psql password: password10