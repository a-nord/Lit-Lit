const bookData = async (event) => {
    event.preventDefault();

    const isbn = '';

    const response = await fetch('/api/book-page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isbn: isbn })
    });

    if (response.ok) {
        const data = await response.json();
    } else {
        console.error(err);
    }
};

document
    .querySelector('.book-results')
    .addEventListener('click', bookData);
