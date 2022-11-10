require('dotenv').config();
import app from './app'
import sequelize from './config'

async function main(){
    process.env.PORT = process.env.PORT || "9966"
    try{
        //await sequelize.authenticate();
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT, async () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}/water-notification.app`)
        });
    }catch(err){
        console.log('Unable to connect to the database: ', err);

    }
}

main();

