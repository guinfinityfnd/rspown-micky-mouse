const modelBx =document.querySelector('.model-dialog-box');
const modelTag = document.querySelector('#model');
const spanTag = document.querySelector('#spa');
modelTag.addEventListener('click',()=>{
    modelBx.style.display = 'block';
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

  spanTag.addEventListener('click',()=>{
    modelBx.style.display = 'none';
  })