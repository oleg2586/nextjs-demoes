import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
// const DUMMY_MEETUPS = [
//     {
//         id:'h3',
//         title:"First Meetup",
//         image:'https://costar.brightspotcdn.com/dims4/default/e1b9846/2147483647/strip/true/crop/2100x1485+0+0/resize/2100x1485!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.amazonaws.com%2F10%2Ff0%2F261bc7174a77905a8ba8c5a2a4aa%2Fchicago.jpg',
//         address:'some city in some town',
//         description:'THes is a first meetup'
//     },
//     {
//         id:'h1',
//         title:"First Meetup City",
//         image:'https://blog.se.com/wp-content/uploads/2020/12/GettyImages-946784972_1200x628.jpg',
//         address:'some city in some town 2',
//         description:'THes is a first meetup 2'
//     }
// ];
function HomePage (props){
    return (
    <Fragment>
        <Head>
            <title>React Meetups</title>
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>);
};
// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     //fetch data from API
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     };
// };
export async function getStaticProps(){
    //fetch data from API
    const client =await MongoClient.connect('mongodb+srv://olegi4:457465@cluster0.0r1jbpg.mongodb.net/meetups?retryWrites=true&w=majority');
    const db=client.db();
    const meetupsCollections = db.collection('meetups');
    // const response = await meetupsCollections.insertOne(data);
    const meetupss = await meetupsCollections.find().toArray();
    client.close();
    return {
        props:{
            // meetups:DUMMY_MEETUPS
            meetups:meetupss.map(meetup =>({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        }
         ,revalidate:1//every 10 seconds data will me regenerated to update itself
    };
};
export default HomePage;


