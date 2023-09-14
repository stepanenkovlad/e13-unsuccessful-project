$(function(){

    $('.item__carousel').slick({
        prevArrow: "<img src='/img/angle-left-svgrepo-com.svg' class='prev' alt='1'>",
        nextArrow: "<img src='/img/angle-right-svgrepo-com.svg' class='next' alt='2'>",
        waitForAnimate: false,
        swipeToSlide: true,
        dots: true,
    })

    $('.slct').click(function(){
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        var arrowImg = "<img class='arrow__img' src='icons/down-arrow.svg' alt=''>"
    
        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();
    
            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
    
            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function(){
    
                /* Заносим в переменную HTML код элемента
                списка по которому кликнули */
                var selectResult = $(this).find('a').data('znach');
                var selectResultName = $(this).find('a').html();
    
                /* Находим наш скрытый инпут и передаем в него
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);
    
                /* Передаем значение переменной selectResult в ссылку которая
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find('.slct').removeClass('active').html(selectResultName + arrowImg);

                $(this).find('img').style= "transform: rotate(180deg)".style= "transition: all .5s;";
    
                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });
    
        /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }
    
        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });

})

$(document).ready(function(){

    $('.cart__form').validate({
        rules: {
            username: "required",
            usersurname: "required",
            useremail: {
                required: true,
                email: true
            },
            usertel: "required",
            index: {
                maxlength: 6
            }
        },
        messages: {
            username: "Пожалуйста, введите имя",
            usersurname: "Пожалуйста, введите фамилию",
            useremail: {
                required: "Пожалуйста, введите фамилию",
                email: "Неправильный адрес электронной почты"
            },
            usertel: {
                required: "Пожалуйста, введите номер телефона"
            },
            index: {
                maxlength: "Неправильный индекс"
            }
        }
    });

    $('.art-stranger').mask('+7 (999) 999-99-99');

    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };


    $('.art-stranger').click(function(){
        $(this).setCursorPosition(4);  // set position number
    });

})