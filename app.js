(function() {

    const config = {
        apiKey: "AIzaSyBlbyF3ylX4iZLWTfFmi1UpgKB257z4x-Q",
        authDomain: "test-project-837bf.firebaseapp.com",
        databaseURL: "https://test-project-837bf-default-rtdb.firebaseio.com/",
        projectId: "test-project-837bf",
        storageBucket: "test-project-837bf.appspot.com",
        messagingSenderId: "518736671539",
        appId: "1:518736671539:web:d8a2e26ba604558838c446"
    };
    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnSignUp = document.getElementById('btnSignUp');

 

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });



}());