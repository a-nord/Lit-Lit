const bookData = async (event) => {
    event.preventDefault();
        // Find the parent article element of the clicked like button
        const parentArticle = event.target.closest('article');
        // Extract book information from the parent element
        const isbn = parentArticle.querySelector('.hidden').textContent;
        console.log(isbn);

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
    .querySelector('#book-results')
    .addEventListener('click', bookData);