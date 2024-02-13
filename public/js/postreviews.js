var likedButn = document.querySelector('liked')

document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('submit');
  if (saveButton) {
    saveButton.addEventListener('submit', handleSave);
  }
});

async function handleSave() {
  const comment = document.querySelector('textarea').textContent;


  try {
    await fetch('/api/book-page', 
    {method: 'POST',
    body: JSON.stringify({comment}),
    headers: {'Content-Type': 'application/json'},
  });
  } catch (error) {
  }
}