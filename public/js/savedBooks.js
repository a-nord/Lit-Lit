// front- saving the user's books to the database
var likedButn = document.querySelector('liked')

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
    await fetch('/api/saveBook', 
    {method: 'POST',
    body: JSON.stringify({title, author, cover}),
    headers: {'Content-Type': 'application/json'},
  });
    console.log('Book saved successfully');

  } catch (error) {
    console.error('Error saving book:', error);

  }
}

likedButn.addEventListener('click', () => {
  console.log('You Liked IT!')
});
