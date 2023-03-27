import axios from 'axios';

// Grab email from the backend, to be used by Katie
export const grabEmail = async (callback) => {
  try {
    const res = await axios.get('/email')
    console.log("This is currently logged in user's email: ", res.data)
    callback(res.data);
  } catch(err) {
    console.log(err);
  }
}

// If you want to implement this in a component, a function you would use is: 

// import { grabEmail } from './grabEmail';

// const KatiesComponent = () => {
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     grabEmail(setEmail);
//   }, []);

//   return (
//     <div>
//       <p>Email: {email}</p>
//     </div>
//   );
// };

// If you don't want to use reusable one, feel free to just copy paste below, it returns it

// useEffect(() => {
//   axios.get('/email')
//     .then((res) => {
//       console.log("This is currently logged in user's email: ", res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })
