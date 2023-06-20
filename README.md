# Initializing the project

- Once the project is pulled into the local machine run the command `npm i` to install all the dependencies
- Create an env file `.env` which would contain the environment varaibles. The `.env.example` file would give you an idea which environment variables would be needed for the project.
- Next step would be run the command `node ace mirgration:run` which would run the migrations and create the table necessary for storing the data.
- With this the project setup would be completed and the command to fetch and store the data would be: `node ace fetch:coins`
