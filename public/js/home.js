
// Any JS for the home page goes here
const searchHandler = async (event) => {
  event.preventDefault();
  const search = document.querySelector('#search-dropdown').value.trim();
  const revisedUserData = search.replace(/ /g, '+');

console.log(revisedUserData);

if (revisedUserData) {
  try {
    const response = await fetch('/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ revisedUserData }),
    });
    // FIXME: redirect to new page
    if (response.ok) {
      window.location.href = '/results';
    } else {
      console.error('Error during fetch. Status:', response.status);
    }
  } catch (error) {
    // Handle any network or other errors
    console.error('Error during fetch:', error);
  }
}
};
// TODO: match the search-container name later. eventListener can be click/submit/enter
document
  .querySelector('#submitBtn')
  .addEventListener('click', searchHandler);

// hint- remember to import them in your handlebars!
