
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function MeetUpPage (){
    const router = useRouter();
    async function addMeetupHandler(enteredFOrmData){
        console.log('Send Form Data TO Mongo',enteredFOrmData);
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredFOrmData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data =await response.json();
        console.log('data',data);
        router.push('/');
    };
    return (
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};
export default MeetUpPage;