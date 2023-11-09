
  $(document).ready(function () {
    // Handle SignUp form submission
    $('#signup-form').submit(function (event) {
      event.preventDefault();
      const username = $('#signup-username').val();
      const email = $('#signup-email').val();
      const password = $('#signup-password').val();

      console.log('SignUp Form Data:', username, email, password);
    });

    // Handle Login form submission
    $('#login-form').submit(function (event) {
      event.preventDefault();
      const username = $('#login-username').val();
      const password = $('#login-password').val();

      console.log('Login Form Data:', username, password);
    });
  });

