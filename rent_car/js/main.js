// document.addEventListener("DOMContentLoaded", function(event){
//   // console.log ("klkl");
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const switchModal = () =>{
//     modal.classList.toggle('modal--visible');
//   };
//   const closeBtn = document.querySelector('.modal__close');

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   console.log (modal);
//   closeBtn.addEventListener('click', switchModal);
// });

$(document).ready(function () {

  var modal =$('.modal'),
  modalThanks =$('.modal-thanks'),
  formModal =$('#modal__form'),
  formControl =$('.control__form'),
  formFooter =$('.footer__form'),
  btnControl =$('.control__button'),
  btnFooter =$('.footer__button'),
  modalBtn = $('[data-toggle="modal"]'),
  closeBtnThanks = $('.modal-thanks__close'),
  closeBtn = $('.modal__close');


  var modalAll = document.querySelectorAll('[data-close="modal"]'),
    modaljs = document.querySelector('.modal');





  $('.fantasies__item').each(function(index, item){

    $(item).click(function(event) {
      
      switch ($(item).attr('data-index')) { 
        
        
        case '1':
          toggleSrcImg('1');
          deleteMarker();
          $(".fantasies__item:nth-child(1)").toggleClass('fantasies__marker');
          break;
        case '2': 
          toggleSrcImg('2');
          deleteMarker();
          $(".fantasies__item:nth-child(2)").toggleClass('fantasies__marker');
          break;
        case '3': 
          toggleSrcImg('3');
          deleteMarker();
          $(".fantasies__item:nth-child(3)").toggleClass('fantasies__marker');
          break;		
        case '4': 
          toggleSrcImg('4');
          deleteMarker();
          $(".fantasies__item:nth-child(4)").toggleClass('fantasies__marker');
          break;
        case '5':
          toggleSrcImg('5');
          deleteMarker();
          $(".fantasies__item:nth-child(5)").toggleClass('fantasies__marker');
          break;
        case '6': 
          toggleSrcImg('6');
          deleteMarker();
          $(".fantasies__item:nth-child(6)").toggleClass('fantasies__marker');
          break;
        case '7': 
          toggleSrcImg('7');
          deleteMarker();
          $(".fantasies__item:nth-child(7)").toggleClass('fantasies__marker');
          break;		
        case '8': 
          toggleSrcImg('8');
          deleteMarker();
          $(".fantasies__item:nth-child(8)").toggleClass('fantasies__marker');
          break;
        case '9': 
          toggleSrcImg('9');
          deleteMarker();
          $(".fantasies__item:nth-child(9)").toggleClass('fantasies__marker');
          break;
        case '10': 
          toggleSrcImg('10');
          deleteMarker();
          $(".fantasies__item:nth-child(10)").toggleClass('fantasies__marker');
          break;		
        case '11': 
          toggleSrcImg('11');
          deleteMarker();
          $(".fantasies__item:nth-child(11)").toggleClass('fantasies__marker');
          break;
      }

      function deleteMarker() {
          $('.fantasies__item').each(function(index, item){
              if  ($(item).hasClass("fantasies__marker")) {
              $(item).removeClass("fantasies__marker");
            }
          });
        }
      
        function toggleSrcImg(num) {
          $('.tab-content img').each(function(index, item){
            var newSrc = $(item).attr('src');
            newSrc = newSrc.slice(0, newSrc.indexOf('-')+1) + num + newSrc.slice(newSrc.indexOf('.'));
            $(item).attr('src', newSrc);
          });
        }


    });
  });



  //Close modal windows
  $('[data-close="modal"]').each(function(index, item){
    //console.log('item: ', item);

    $(item).click(function(event) {
      var target = event.target;
  
      //console.log('target', target); 
     
          if  ($(target).hasClass("modal--visible")) {
            $(target).removeClass("modal--visible");
          }
    });
    $(document).keydown(function(event) {
      if (event.code === 'Escape' && ( $(item).hasClass("modal--visible"))) {
        $(item).removeClass("modal--visible");
      }
    });

  });


  modalBtn.on('click', function () {
    // if ($('div').is('#glo_vksubscribe')) {
    //   $('#glo_vksubscribe').remove();
    //   $('.modal__title').text('Оставьте заявку и наш менеджер свяжется с вами ');
    // }
    $('#modal__form').css('display',"flex");
    $('.modal__title').css('display',"block");
    $('.modal__thanks-block').css('display',"none");
    $('.modal__form').css('opacity',1);
    $('.modal__title').css('opacity',1); 

    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function() {
    modal.removeClass('modal--visible');
  });

  
  closeBtnThanks.on('click', function() {
    modalThanks.removeClass('modal--visible');
  });



  let flyInterval,
    count = 1;


  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  
  next.css('left',prev.width() + 6 + bullets.width() + 32);
  bullets.css('left',prev.width() + 21);



  //anime
  new WOW().init();


  // Валидация форм
  //, .footer__form, .control__form

  //Замена встроенного метода проверки емейла на лучший , с проверкой точки
  $.validator.methods.email = function( value, element ) {
    return this.optional( element ) || /[A-z0-9._]+@[A-z0-9.-]+\.[a-z]+/.test( value );
  };

  $('#modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      //правило - объект
      userEmail: {
        required: true,
        email: true
      },

      modalPolicyCheckbox: {
        required: true
      }
    },
    //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее 15ти букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный телефон",
      },      
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      modalPolicyCheckbox: {
        required: "Заполните поле"
      }
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //console.log('response: ', response);

          //console.log($(form).serialize());
          $('form')[2].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal--visible');
          ym(62095768,'reachGoal','sendForm');
        },
        erorr: function(response) {
          console.error('Ошибка запроса' + response);
        }
        
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило simple rule, converted to {required:true}
      userNameControl: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneControl: {
        required: true,
        minlength: 17
      },
      //правило - объект
      userEmailControl: {
        required: true,
        email: true
      },
      controlPolicyCheckbox: {
        required: true
      }
    },
    //сообщения
    messages: {
      userNameControl: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее 15ти букв"
      },
      userPhoneControl: {
        required: "Заполните поле",
        minlength: "Исправьте телефон",
      },      
      userEmailControl: {
        required: "Заполните поле",
        email: "Исправьте email"
      },
      controlPolicyCheckbox: {
        required: "Заполните поле"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //console.log('$(form).serialize()');
          //console.log($(form).serialize());
          //console.log('Ajax сработал. Ответ сервера: ' + response);
          modalThanks.toggleClass('modal--visible');
          //$('.control__form').reset(); не работает, надо именно форма нужна
          $('form')[0].reset();
          ym(62095768,'reachGoal','sendForm');
        }
      });
    }

  });

  $('.metering__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило simple rule, converted to {required:true}
      userNameMetering: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneMetering: {
        required: true,
        minlength: 17
      },
      //правило - объект
      userEmailMetering: {
        required: true,
        email: true
      },
      meteringPolicyCheckbox: {
        required: true
      }
    },
    //сообщения
    messages: {
      userNameMetering: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее 15ти букв"
      },
      userPhoneMetering: {
        required: "Заполните поле",
        minlength: "Исправьте телефон",
      },      
      userEmailMetering: {
        required: "Заполните поле",
        email: "Исправьте email"
      },
      meteringPolicyCheckbox: {
        required: "Заполните поле"
      }
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //console.log('response: ', response);

          //$('.modal__form').hide(); //css('display',"none");
          //console.log($(form).serialize());
          $('form')[10].reset();
          //$('.metering__form').reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal--visible');
          ym(62095768,'reachGoal','sendForm');
        },
        erorr: function(response) {
          console.error('Ошибка запроса' + response);
        }
      });
    }
    
  });

  $('.footer__form').validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // строчное правило simple rule, converted to {required:true}
        userNameFooter: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhoneFooter: {
          required: true,
          minlength: 17
        },
        //правило - объект
        footerPolicyCheckbox: {
          required: true
        }
      },
      //сообщения
      messages: {
        userNameFooter: {
          required: "Заполните поле",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длинее 15ти букв"
        },
        userPhoneFooter: {
          required: "Заполните поле",
          minlength: "Введите корректный телефон",
        },      
        footerPolicyCheckbox: {
          required: "Заполните поле"
        }
      },

      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            //console.log($(form).serialize());
            //console.log('Ajax сработал. Ответ сервера: ' + response);
            $('form')[1].reset();
            //$('.footer__form').reset();
            // // modal.removeClass('modal--visible');
            modalThanks.toggleClass('modal--visible');
            ym(62095768,'reachGoal','sendForm');
          }
        });
      }

  });




  //$('.phone').mask('0000-0000');
  // маска для телефона
  //$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  $('[type=tel]').mask('+7(000) 000-00-00');//, {placeholder: "Ваш номер телефона:"});
  
 // $('#user-phone-metering').mask('+7(000) 000-00-00', {placeholder: "Ваш телефон:"});
  
  // Яндекс карта с меткой с собственным изображением
    //перенесена в html
  ///

  //подключение YouTube
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'BQVQBwP17G8',
      events: {
        'onReady': videoPlay,
      }
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }

  var playerSlide1;
  $('#slide1-1 svg').on('click', function onYouTubeIframeAPIReady(){
    playerSlide1 = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'BQVQBwP17G8',
      events: {
        'onReady': videoPlay2,
      }
    });
  });
  function videoPlay2(event) {
    event.target.playVideo();
  }


// <iframe width="560" height="315" src="https://www.youtube.com/embed/TvVYeLvujLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


 function topArrow(){
    const totop = document.querySelector('.totop'),
      promo = document.querySelector('.promo');
      console.log('promo: ', promo);
 
    totop.style.opacity = 0;
     
    const base = promo.offsetTop;
    console.log('base: ', base);
    

     window.addEventListener('scroll', function(){    
      // console.log('window.pageYOffset: ', window.pageYOffset);
      if (window.pageYOffset > base ) {
        console.log('window.pageYOffset: ', window.pageYOffset);
        totop.style.opacity = 1;
        

       } else {
        totop.style.opacity = 0;
      }
      if (window.pageYOffset >= 100) {
        $('.header').css('background-color', 'rgb(34,34,34,0.95)');
      } else {
        $('.header').css('background-color', 'transparent');
      }
        // появление плашки меню при скроле
      //$('.header_body').toggleClass('header__body-bcg');
    });
  }
  
  topArrow();

  $("#totop").click(function(){
    //Необходимо прокрутить в начало страницы
    var curPos=$(document).scrollTop();
    var scrollTime=curPos/1.73;
    $("body,html").animate({"scrollTop":0},scrollTime);
    });







  //плавная прокрутка


  // $("body").on('click', '[href*="#"]', function(e){
  //   var target = e.target;
  //   console.log('$target: ', $(target));
  //   var fixed_offset = 100;
  //   console.log('$(this.hash): ', $(this.hash));
  //   $('html,body').animate({ scrollTop: $(target).offset().top}, 1000);
    
  //   e.preventDefault();
  // });

//   $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
//     e.preventDefault();
//     console.log('$(this): ', $(this));
//     var t = 1000;
//     //var d = $(this).attr('href') ? $(this).attr('data-href') : $(this).attr('href');
//     var d = $(this).attr('href');
//     console.log('$(this).attr(href): ', $(this).attr('href'));
//     console.log('$(d): ', $(d));
//     $('html,body').stop().animate({ scrollTop: $(this).offset().top }, t);
    
// });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    if ( $(this).attr("class").indexOf("totop") < 0) {
      var id = $(this).attr('href');
      var    top = $(id).offset().top;
      if ( $(this).attr("class").indexOf("footer__contacts") > 0){
      $('body,html').animate({
            scrollTop: top - 400
        }, 3000);
      } else {
        $('body,html').animate({
          scrollTop: top  }, 3000);
      }
    }
  });

  //слайдер для видео
  $('.arrow-left').on('click', function (e) {
    var currSlideId = $('.active').attr('id'),
    
    //nextSlideId =  //currSlideId.slice(0, currSlideId.length-1),
    nextSlideIdOne = "#slide1-",
    nextSlideIdTwo ="#slide2-";
    console.log('currSlideId: ', currSlideId);
    var currSlideNum = currSlideId.slice(-1)*1;
    console.log('currSlideNum: ', currSlideNum);

    //опр ширину вьюпорта
    console.log('screen.availWidth: ', screen.availWidth);
    if (screen.availWidth <= 767) {
      //убираем актив со второго номера и 
      //$("#slide2-"+currSlideNum).toggleClass('active');
      //еще раз получаем кто есть актив и используем сквозную нум-ю
      var currSlideDataId = $('.active').attr('data-id');
      console.log('currSlideDataId:####### ', currSlideDataId);
      if ((currSlideNum) == 1){
        nextSlideDataId = 4;
        console.log('nextSlideDataId: #####', nextSlideDataId);

      } else {
        nextSlideDataId = currSlideDataId - 1;
        console.log('nextSlideDataId: ######', nextSlideDataId);
      }
      //предыдущий убираем
      $('[data-id='+currSlideDataId+']').toggleClass('active');
      $('[data-id='+nextSlideDataId+']').toggleClass('active');


    } else {
        if ((currSlideNum) == 1){
          nextSlideIdOne = "#slide1-" + '2';
          console.log('nextSlideIdOne: ', nextSlideIdOne);
          nextSlideIdTwo = "#slide2-" + '2';
          console.log('nextSlideIdTwo: ', nextSlideIdTwo);
        } else {
          nextSlideIdOne = "#slide1-" + (currSlideNum-1);
          console.log('nextSlideIdOne: ', nextSlideIdOne);
          nextSlideIdTwo = "#slide2-" + (currSlideNum-1);     
          console.log('nextSlideIdTwo: ', nextSlideIdTwo);
        }
        
        $("#"+currSlideId).toggleClass('active');
        $("#slide2-"+currSlideNum).toggleClass('active');



        console.log('$(currSlideId): ', $("#"+currSlideId));
        $(nextSlideIdOne).toggleClass('active ');
        console.log(' $(nextSlideIdOne): ',  $(nextSlideIdOne));
        $(nextSlideIdTwo).toggleClass('active ');
      }
  });

  $('.arrow-right').on('click', function (e) {
    var currSlideId = $('.active').attr('id'),
    nextSlideIdOne = "#slide1-",
    nextSlideIdTwo ="#slide2-",
    nextSlideDataId = 1;
    console.log('currSlideId: ', currSlideId);
    var currSlideNum = currSlideId.slice(-1)*1;
    console.log('currSlideNum: ', currSlideNum);

    console.log('screen.availWidth: ', screen.availWidth);

    //опр ширину вьюпорта
    if (screen.availWidth <= 767) {
      
      //убираем актив со второго номера и - это  в отдельно функции
      //$("#slide2-"+currSlideNum).toggleClass('active');
      //еще раз получаем кто есть актив и используем сквозную нум-ю
      var currSlideDataId = $('.active').attr('data-id');
      console.log('currSlideDataId:##### ', currSlideDataId);
      if ((currSlideNum) == 2){
        nextSlideDataId = 1;

      } else {
        nextSlideDataId = nextSlideDataId + 1;
        console.log('nextSlideDataId: ###### ', nextSlideDataId);
      }
      //предыдущий убираем
      $('[data-id='+currSlideDataId+']').toggleClass('active');
      $('[data-id='+nextSlideDataId+']').toggleClass('active');


    } else {

      if ((currSlideNum) == 2){
        nextSlideIdOne = "#slide1-" + '1';
        console.log('nextSlideIdOne: ', nextSlideIdOne);
        nextSlideIdTwo = "#slide2-" + '1';
        console.log('nextSlideIdTwo: ', nextSlideIdTwo);
      } else {
        nextSlideIdOne = "#slide1-" + (currSlideNum + 1);
        console.log('nextSlideIdOne: ', nextSlideIdOne);
        nextSlideIdTwo = "#slide2-" + (currSlideNum + 1);     
        console.log('nextSlideIdTwo: ', nextSlideIdTwo);
      }
      
      $("#"+currSlideId).toggleClass('active');
      $("#slide2-"+currSlideNum).toggleClass('active');
  
      console.log('$(currSlideId): ', $("#"+currSlideId));
      $(nextSlideIdOne).toggleClass('active ');
      console.log(' $(nextSlideIdOne): ',  $(nextSlideIdOne));
      $(nextSlideIdTwo).toggleClass('active ');
    }

  });

// событие смены vw - для восстановления показа 2го слайда
  $(window).resize(function(){
    if ((screen.availWidth > 765 )&&(screen.availWidth < 770)) {
        var currSlideId = $('.active').attr('id'),
        nextSlideIdOne = "#slide1-",
        nextSlideIdTwo ="#slide2-",
        nextSlideDataId = 1;
        //console.log('currSlideId: ', currSlideId);
        var currSlideNum = currSlideId.slice(-1)*1;

        var currCalNum = currSlideId.slice(-3,-2);
        //console.log('currCalNum: ', currCalNum);
        var itemSlideTwoActive = 1,
        currCalNumInsert = 1;

        //console.log('screen.availWidth: ', screen.availWidth);

        //должно быть 2 слайда
        if ((screen.availWidth >= 767 )&&(screen.availWidth < 770)) {
          if (currCalNum == 1) {
            currCalNumInsert = 2;
          } else {
            currCalNumInsert = 1;
          }
          itemSlideTwoActive = "#slide"+currCalNumInsert+"-"+currSlideNum;
          //console.log('itemSlideTwoActive: ', itemSlideTwoActive);
          if  ($(itemSlideTwoActive).hasClass("active")) {
            //
          } else {
            ($(itemSlideTwoActive).addClass("active"));
          }         
        } else 
        if ((screen.availWidth > 765 )&&(screen.availWidth < 767)) {
          //всегда отключать фото из 2ой колонки
          $("#slide2-"+currSlideNum).removeClass('active');
          //console.log('"#slide2-"+currSlideNum): ', ("#slide2-"+currSlideNum));
        }
    }
  });

  // Бургер клик
  $('.header__burger').click(function (e) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });


});

