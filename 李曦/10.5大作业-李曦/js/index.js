$(function() {
    $('#search').click(function() {
        $('#search_mask').toggle();
    })
    $('.search2').click(function() {
        $('#search_mask').hide();
    })
    $('.navlist ul li').hover(function() {
        $(this).addClass('currentLi').siblings().removeClass('currentLi');
    })

    $('.nav_dropdown').click(function() {
        $('#nav_dropdown_mask').show();
    })
    $('.navlist .triangle').click(function() {
        $('#nav_dropdown_mask').hide();
    })
    $('.sliderTab_hd li').click(function() {
        $(this).addClass('currentSlideTab').siblings().removeClass('currentSlideTab');
        $('.sliderTab_bd_t div').eq($(this).index()).show(400).siblings().hide(400);
    })
    $('.sliderTab_bd button').click(function() {
            $(this).addClass('currentBtn').siblings().removeClass('currentBtn');
        })
        // $('.btn-r').click(function() {
        //     $('.piclist2 li').eq($(this).index(+1)).show(400).siblings().hide(400);
        // })
})