$(function () {

    //подключение модалки
    $('.bpopup').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).bPopup({
                closeClass:'close',
                positionStyle: 'fixed'
                //follow: [false, false], //x, y
            });
    });
    
    //прилипает меню к верху
    $(window).scroll(function () {
        var wScrTop = $(window).scrollTop()
        if (wScrTop > 0) {
            $('#Top').addClass('Fixed-bar')
        } else {
            $('#Top').removeClass('Fixed-bar')
        }

    });


    $(window).resize(function(){
        var width = $(window).innerWidth();
        //console.log(width);
        if (width < 976) {
            $('.dropDownMenu > ul').addClass('accordeon');
        }else{
            $('.dropDownMenu > ul').removeClass('accordeon');
            $('.dropDownMenu').removeClass('active');
            $('#hamburger').removeClass('active');


        }
     
    }).resize();


    //меню аккардион в левом сайдбаре
    $("body .accordeon > li > span").on('click', function (e) {
        e.preventDefault();
        var menu = $(this).closest('.accordeon');
        if (false == $(this).next().is(':visible')) {
            menu.find('li').removeClass('slide active');
            menu.find('ul').slideUp();
        }
        $(this).next().slideToggle();
        $(this).parent().addClass('slide');
    });

    //select для языков
    $(".selectlink-js").on('click', function (e) {
        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function () {
            $('.Flag .Flag__dropdown').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('.Flag__dropdown').removeClass('active');
                $(".selectlink-js").removeClass('active');
            } else {
                $('.Flag__dropdown').addClass('active');
                $(".selectlink-js").addClass('active');
            }
        });
        return false;
    });

    $('.Flag-js').on('click', function (e) {
        if ($('.Flag__dropdown').hasClass('active')) {
            $(".selectlink-js").html($(this).html());
            $('.Flag .Flag__dropdown').slideUp(200);
            $('.Flag .Flag__dropdown').removeClass('active');
            $(".selectlink-js").removeClass('active');
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".selectlink-js"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0  ) 
        { // и не по его дочерним элементам
			//div.hide(); // скрываем его
            $('.Flag__dropdown').slideUp(200);
            $(".selectlink-js").removeClass('active');
		}	
	});

    $('.btn-trigger').click(function (e) {
        $('.Cantry__dropdown').slideToggle(200);
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".btn-trigger"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0  ) 
        { // и не по его дочерним элементам
			//div.hide(); // скрываем его
            $('.Cantry__dropdown').slideUp(200);
		}	
	});

    $('.Cantry-js ').on('click', function (e) {
        var cantry = $(this).children().text()
        $("span.txt").text(cantry);
        $('.Cantry__dropdown').slideUp(200);
                
            
    });
    
    $(".Cantry__dropdown .Flag__select").on("click", function(){
        var tabs = $(".Cantry__dropdown .Flag__select")
            cont = $(".Contacts__wrap-tab .Cantry-tab");
      // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
      // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });





    //подключение слайдера для отзывово
    $('.Reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 4,
        dots: false,
        navClass: ['slick-prev-t', 'slick-next-t'],
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }

        }

    });

    $('.Slider1').owlCarousel({
        // center: true,
        items:3,
        loop:true,
        //margin:10,
        nav:true,
		lazyLoad:true,
        dots: false,
        responsive:{
          0:{
            items:1,
            nav:false,
            dots: true
          },
          768:{
            nav:true,
            dots: false,
            items:2
          }
        }
      });	

    //работа бургера меню
    $('body #hamburger').click(function (e) {
        $(this).toggleClass('active');
        $('.dropDownMenu').toggleClass('active');
    });
    
    //закрыть боковое меню
    $('body #slide-close').on('click', function (e) {
        if ($('.dropDownMenu').hasClass('active')) {
            $('.dropDownMenu').removeClass('active');
            $('#hamburger').removeClass('active');
  
        }
    });

    //подключение модалки
    $('.bpopup').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).bPopup({
                closeClass:'close'
            });
    });

    // $('.IconProfile').on('click', function (e) {
    $('.IconProfile').on('click', function (e) {
        $(this).toggleClass('active');
        $('.ProfPanel').slideToggle();
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".IconProfile"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0  ) 
        { // и не по его дочерним элементам
			//div.hide(); // скрываем его
            $('.ProfPanel').slideUp(200);
		}	
	});


    
        $('.FaqTrigger').on('click', function (e) {
            $(this).toggleClass('up');
            $(this).parent().find('.FaqCont__text').slideToggle();

        });

        

            $(".SupTabs .SupTabs__tab").on("click", function(){
                var tabs = $(".SupTabs .SupTabs__tab")
                    cont = $(".SupTabs .SupTabs__cont");
              // Удаляем классы active
                tabs.removeClass("active");
                cont.removeClass("active");
              // Добавляем классы active
                $(this).addClass("active");
                cont.eq($(this).index()).addClass("active");
                return false;
            });
        

        

            $(".MakeTabs .MakeTabs__tab").on("click", function(){
                var tabs = $(".MakeTabs .MakeTabs__tab")
                    cont = $(".MakeTabs .MakeTabs__cont");
              // Удаляем классы active
                tabs.removeClass("active");
                cont.removeClass("active");
              // Добавляем классы active
                $(this).addClass("active");
                cont.eq($(this).index()).addClass("active");
                //return false;
            });
        
    

    
        //
          $(".MTranslate").on('change', function () {
                  var select1 = $("select#inputlanguage1 option:selected").val();
                  var select2 = $("select#inputlanguage2 option:selected").val();
                  var radio = $(".TypeTranslate__item input[type='radio']");

                  //console.log(select1);
                  //console.log(select2);

                  if (select1 !== ''  && select2 !== '') {
                      $("#TypeTranslate").addClass("ShadowNo");
                      //console.log('ВЫБОР СДЕЛАН');
                  } else {
                      $("#TypeTranslate").removeClass("ShadowNo");
                      //console.log('ВЫБОР неСДЕЛАН');
                  }

                  
                  if (radio.is(':checked')){
                    $("#VidTranslate").addClass("ShadowNo");
                      //console.log('включен');
                    } else {
                    $("#VidTranslate").removeClass("ShadowNo");
                      //console.log('выключен');
                    }


              });


                 
         
              





// form label
// (function ($) {
//     function topLabel(inputType) {
//         $(inputType).each(function () {
//             var $this = $(this);
//             // on focus add class active to label
//             $this.focus(function () {
//                 $this.next().addClass("active");
//             });
//             //on blur check field and remove class if needed
//             $this.blur(function () {
//                 if ($this.val() === '' || $this.val() === 'blank') {
//                     $this.next().removeClass();
//                 }
//             });
//         });
//     }
//     // just add a class of "topLabel to the input field!"
//     topLabel(".topLabel");
// })(jQuery);

// $("a[href^='#']").click(function(e){
//     e.preventDefault();
//     var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
//         top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
    
//     $("html, body").animate({scrollTop: (top - 90)});
// });



    // при достижении низа меню меньше 170px меню выподает вверх
    $(window).scroll(function() {
        $('.Top-menu-foot').each(function(){
        var menuPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var topPositionEl = (menuPos + 70) - topOfWindow;
        var windowHeight = $(window).innerHeight();
        var bottomPosition = windowHeight - topPositionEl 

        //console.log( windowHeight - topPositionEl );

            if (bottomPosition < 170) {
                $(this).addClass("menuUp");
            } else if (menuPos > topOfWindow + 400) {
                $(this).removeClass("menuUp");
            }
        });
    });


      // Находим радио кнопки и кнопку отправки
      var radioButtons = $('body input[type="radio"].input-pay');
      var submitButton = $('body #nextPay');
  
      // При изменении состояния радио кнопок
      radioButtons.change(function() {
        // Проверяем, есть ли выбранная радио кнопка
        if (radioButtons.is(':checked')) {
          // Если есть выбранная кнопка, активируем кнопку отправки
          submitButton.prop('disabled', false);
        } else {
          // Если нет выбранной кнопки, деактивируем кнопку отправки
          submitButton.prop('disabled', true);
        }
      });

//       $("body").on("click", ".input-pay", function () {
//         if ($(this).prop( "checked" )) {
//            $('#nextPay').removeAttr('disabled');
//            } else {
//                $('#nextPay').attr("disabled","disabled");
//            }
//    });




});// end document ready

document.getElementById('selectBox').addEventListener('change', function() {
    var selectBox = this;
    var customInput = document.getElementById('customInput');

    if (selectBox.value === 'custom') {
      customInput.style.display = 'none';
      customInput.value = ''; // Очистить поле ввода, если пользователь вернулся к кастомному варианту
    } else {
      customInput.style.display = 'block';
      customInput.value = selectBox.value;
    }
  });

// поле загрузки файла
$('.input-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.input-file').find('.input-file-text').html(file.name);
});



// подключение к полям телефона перфикс и флаг страны     
$(".phone-flag").each((i, e) => {

    window.intlTelInput(e, {
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        geoIpLookup: function(callback) {
            $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
            });
        },
        // hiddenInput: "full_number",
        initialCountry: "auto",
        // localizedCountries: { 'de': 'Deutschland' },
        // nationalMode: false,
        // onlyCountries: ['ru', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        // separateDialCode: true,
        utilsScript: "js/utils.js",
    });
});

// подключение слайдера swiper для блоков цен
new Swiper(".swiper", {
    //slidesPerView: 1,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    //centeredSlides: false,
    //slidesPerGroup: 1,
    //loop: true,
    //loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   //clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p" ,
    },
  }); 

