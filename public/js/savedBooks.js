// Any javascript needed for the dataOne goes here


document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton');
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

  } catch (error) {
    console.error('Error saving book:', error);

  }
}

// hint- remember to import them in your handlebars!
