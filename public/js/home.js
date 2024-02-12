// Any JS for the home page goes here
const searchHandler = async (event) => {
  event.preventDefault();
  const search = document.querySelector('.search-dropdown').value.trim().toLowerCase();
  const revisedUserData = search.replace(/ /g, '+');
  const searchCriteria = document.getElementById('.dropdown').value.toLowerCase();


  if (search) {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?${searchCriteria}=${revisedUserData}`);
      const results = response.data.results;
      
      const title = results[0].title;
      const author = results[0].author_name[0];
      const cover = results[0].cover_i;
      console.log(title);


      const data = {
        title: title,
        author: author,
        cover: cover
      };

      // Make a POST request to the API/results file with the data
      const apiResponse = await axios.post('/api/results', data);
      console.log(apiResponse.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  }
};
// TODO: match the search-container name later. eventListener can be click/submit/enter
document
  .querySelector('.search-container')
  .addEventListener('submit', loginFormHandler);

// hint- remember to import them in your handlebars!
