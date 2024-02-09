// Any javascript needed for the dataOne goes here
// savedBooks.js

document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton'); // Replace with the actual ID of your button
  if (saveButton) {
    saveButton.addEventListener('click', handleSave);
  }
});

async function handleSave() {
  const title = document.querySelector('h2').textContent;
  const author = document.querySelector('p').textContent;

  try {
    const response = await axios.post('/api/saveBook', { title, author });
    console.log('Book saved successfully:', response.data);
    // Optionally update UI or perform additional actions
  } catch (error) {
    console.error('Error saving book:', error);
    // Handle the error
  }
}

// hint- remember to import them in your handlebars!
