$(document).ready(function() {
    $('.slider__myslider').slick({
        arrows: true,
        adaptiveHeight: true
    });

    function validateForm(form) {
        $(form).validate({
          rules: {
            name: {
              required: true,
            },
            phone: {
              required: true,
            },
            email: {
              required: true,
              email: true,
            }
          },
          messages: {
            name: "Пожалуйста, введите ваше имя",
            phone: "Пожалуйста, введите ваш номер",
            email: {
              required: "Пожалуйста, введите ваш E-mail", 
              email: false
            }
          }
        });
      };
    
      validateForm(".prices__consultation");
      validateForm(".questions__body-form");
    
    
      $('form').submit(function(e) {
        e.preventDefault();
    
        if (!$(this).valid()) {
          return;
        }
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            /* $('#consultation, #buy').fadeOut();
            $('.modal, #ty').fadeIn('slow'); */
    
            $('form').trigger('reset');
        });
        return false;
      });
});



const hamburger = document.querySelector('.hamburger'),
    hidden = document.querySelector('.hidden'),
    closeElem = document.querySelector('.hidden__close');

hamburger.addEventListener('click', () => {
    hidden.classList.add('active');
});

closeElem.addEventListener('click', () => {
    hidden.classList.remove('active');
});

