import axios from 'axios';

// Logout function, to be used in NavigationBar.js and Sidebar.js
export const logout = async (setCookieValue) => {

  try{
    const res = await axios.post('/logout');
    setCookieValue('');
  } catch(err) {
    console.log(err);
  }
}

  // Original function used in NavigationBar and Sidebar components
  // const logout = async (event) => {
  //   event.preventDefault();
  //   try{
  //     await axios.post('/logout')
  //     .then((res) => {
  //       props.setCookieValue('');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
