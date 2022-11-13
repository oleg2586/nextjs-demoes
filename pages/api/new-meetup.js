// /api/new-meetup
import {MongoClient} from 'mongodb'
// POST /api/new-meetup
async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body;

        // const {id,title,image,address,description} = data;//object distraction data
       const client =await MongoClient.connect('mongodb+srv://olegi4:457465@cluster0.0r1jbpg.mongodb.net/meetups?retryWrites=true&w=majority');
       const db=client.db();
       const meetupsCollections = db.collection('meetups');
       const response = await meetupsCollections.insertOne(data);
       console.log('response:',response);
       client.close();

       res.status(201).json({message:'Meetup Inserted!'});
    }
}
export default handler;