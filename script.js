// script.js

// Handle Sign Up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submit
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Create user with email and password using Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Get the user object
            const user = userCredential.user;
            
            // Save additional user info to Firestore
            db.collection('users').doc(user.uid).set({
                email: user.email,
                createdAt: new Date(),
            })
            .then(() => {
                // Success: user data stored
                alert('User signed up and data stored in Firestore!');
                window.location.href = 'home.html';  // Redirect to home page
            })
            .catch((error) => {
                // Handle errors
                console.error('Error storing user data: ', error);
            });
        })
        .catch((error) => {
            // Handle errors during sign-up
            alert(error.message);
        });
});