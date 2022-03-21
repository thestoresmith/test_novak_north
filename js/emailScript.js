const formValidate = () => {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(fullName.length < 1) {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter a valid name',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    return false
  }
  if(!userEmail.match(emailRegex)) {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter a valid email',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    return false
  }
  if(userMessage.length < 1) {
    Swal.fire({
      title: 'Error!',
      text: 'Please include contact form message',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    return false
  }
  return true
}

(function() {
  emailjs.init("user_3pb4we0Di0cM55SGSampr");
  })();

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;
  let formButton = document.getElementById("submit-btn");

      var contactParams = {
          user_name: fullName,
          user_email: userEmail,
          message: userMessage
      };
      if (formValidate()) {
        emailjs.send('gmail', 'template_p5d2mln', contactParams).then(function (res) {})
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for your email.',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
        formButton.disabled = true;
      }
}