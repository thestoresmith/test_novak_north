const fullName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

(function() {
  emailjs.init("user_3pb4we0Di0cM55SGSampr");
  })();

function sendEmail() {
  // contactParams are what is being used in the emailjs.send function and being connected to template as dynamic variables on the back end
  const contactParams = {
      user_name: fullName.value,
      user_email: userEmail.value,
      message: userMessage.value
  };

  if(!fullName.value) {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter a valid name',
      icon: 'error',
      confirmButtonText: 'Okay',
      background: '#2a3166ef',
      color: '#F27475'
    })

  } else if(!userEmail.value.match(emailRegex)) {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter a valid email',
      icon: 'error',
      confirmButtonText: 'Okay',
      background: '#2a3166ef',
      color: '#F27475'
    })

  } else if(!userMessage.value) {
    Swal.fire({
      title: 'Error!',
      text: 'Please include contact form message',
      icon: 'error',
      confirmButtonText: 'Okay',
      background: '#2a3166ef',
      color: '#F27475'
    })

  } else {
    emailjs.send('gmail', 'template_p5d2mln', contactParams).then(function (res) {
      console.log(res);
    });

    Swal.fire({
      title: 'Success!',
      text: 'Thank you for your email.',
      icon: 'success',
      confirmButtonText: 'Okay',
      background: '#2a3166ef',
      color: '#F27475'
    })
    submitBtn.disabled = true;
    submitBtn.classList.add('primary-button-disabled-color');
    submitBtn.innerText = 'Thank you for your submission!'
  }
}