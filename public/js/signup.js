const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        alert('Signup failed. Please check your information and try again.');
      
    }
  };

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  