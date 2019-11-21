//slider
$(function() {
            $("#button_off").click(function() {
              $(".container_slider").css("display", "none");

              $("#button_off").css("display", "none");

              $("#button_on").css("display", "block");
            });

            $("#button_on").click(function() {
              $(".container_slider").css("display", "block");

              $("#button_off").css("display", "block");

              $("#button_on").css("display", "none");
            });
          });


// скритие блока(block)
function viewdiv(id){
var el=document.getElementById(id);
if(el.style.display=="none"){
el.style.display="block";
} else {
el.style.display="none";
}
}


// меню


$(function() {
    $('.link').on('click', function(e) {
        e.preventDefault();
        $('.bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});

/*
// стрелка
jQuery(document).ready(function($){
    $('<style>'+
        '.scrollTop{ display:none; z-index:9999; position:fixed;'+
            'bottom:20px; left: ;t:90%; width:88px; height:125px;'+
            'background:url(https://biznessystem.ru/img/arrow.png) 0 0 no-repeat; }' +
        '.scrollTop:hover{ background-position:0 -133px;}'
    +'</style>').appendTo('body');
    var
    speed = 550,
    $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');		
    $scrollTop.click(function(e){
        e.preventDefault();
        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });

    //появление стрелки
    function show_scrollTop(){
        ( $(window).scrollTop() > 150 ) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
    }
    $(window).scroll( function(){ show_scrollTop(); } );
    show_scrollTop();
});
*/
    // фон
function color_black(){
    document.body.style.background = "black"; 
}
function color_green(){
    document.body.style.background = "green";
}


function color_white(){
    document.body.style.background = "white";
}
/*
// слайдер
var locations = new Array("https://img3.goodfon.ru/original/960x800/d/ac/t-34-85-srednii-tank-pamiatnik.jpg","https://img-b.photosight.ru/c5d/5694660_large.jpg","https://topwar.ru/uploads/posts/2019-04/1554458138_ia5a6449.jpg");
        var currentImage = 0;

        function nextImage() {
            currentImage++;
            if (currentImage == locations.length) 
                currentImage = 0;                
            document.images["picture"].src = locations[currentImage];
            return false;
        }
*/
//slider
$(function() {
            $("#button_off").click(function() {
              $(".container_slider").css("display", "none");

              $("#button_off").css("display", "none");

              $("#button_on").css("display", "block");
            });

            $("#button_on").click(function() {
              $(".container_slider").css("display", "block");

              $("#button_off").css("display", "block");

              $("#button_on").css("display", "none");
            });
          });
// подменю ЛТ
$(function() {
    $('.lt_pod_link').on('click', function(e) {
        e.preventDefault();
        $('.lt_pod_bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});

// подменю СТ
$(function() {
    $('.st_pod_link').on('click', function(e) {
        e.preventDefault();
        $('.st_pod_bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});

// подменю ТТ
$(function() {
    $('.tt_pod_link').on('click', function(e) {
        e.preventDefault();
        $('.tt_pod_bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});


// подменю ПТ-САУ
$(function() {
    $('.pt-cay_pod_link').on('click', function(e) {
        e.preventDefault();
        $('.pt-cay_pod_bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});


// подменю САУ
$(function() {
    $('.cay_pod_link').on('click', function(e) {
        e.preventDefault();
        $('.cay_pod_bar').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});

