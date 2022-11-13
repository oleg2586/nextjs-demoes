import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const SelectedMeetupPage = (props) => {
  return (
    <MeetupDetail
      id="h1"
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://olegi4:457465@cluster0.0r1jbpg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  // const response = await meetupsCollections.insertOne(data);
  const meetupss = await meetupsCollections.find({}, { _id: 1 }).toArray(); //find in every obj in array but only id
  client.close();
  return {
    fallback: false,
    paths: meetupss.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    //   [  {
    //         params:{
    //             meetupId:'h1'
    //         }
    //     },
    //     {
    //         params:{
    //             meetupId:'h3'
    //         }
    //     }
    // ]
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // console.log('meetupId',meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://olegi4:457465@cluster0.0r1jbpg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  // const response = await meetupsCollections.insertOne(data);
  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id:selectedMeetup._id.toString(),
        title:selectedMeetup.title,
        address:selectedMeetup.address,
        image:selectedMeetup.image,
        description:selectedMeetup.description,
      }

      // {
      //     id:meetupId,
      //     title:"First Meetup",
      //     image:'https://costar.brightspotcdn.com/dims4/default/e1b9846/2147483647/strip/true/crop/2100x1485+0+0/resize/2100x1485!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.amazonaws.com%2F10%2Ff0%2F261bc7174a77905a8ba8c5a2a4aa%2Fchicago.jpg',
      //     address:'some city in some town',
      //     description:'THes is a first meetup'
      // }
    },
  };
}
export default SelectedMeetupPage;
