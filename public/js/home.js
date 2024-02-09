// Any JS for the home page goes here
const searchHandler = async (event) => {
  event.preventDefault();
  const search = document.querySelector('.search-input').value.trim();
  const revisedUserData = search.replace(/ /g, '+')


  // TODO: need a way to grab the tile/author/genre from user. then string it all to match `title=the+lord+of+the+rings`
  if (search) {
    try {
      const response = await axios.post('/api/users/login', revisedUserData);
      // Handle the response from the server
      console.log(response.data); // Assuming the server sends back some data
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the error
    }
  }
};
// TODO: match the search-container name later. eventListener can be click/submit/enter
document.querySelector(".search-container").addEventListener("submit", loginFormHandler);

// hint- remember to import them in your handlebars!
