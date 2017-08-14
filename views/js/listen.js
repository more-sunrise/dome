var bar_left = 0,bar_width = 0;
var voice_left =  0,voice_width = 0;


$(window).resize(function(){
	bar_left = $('.bar_out').offset().left;
	bar_width = $('.bar_out').width();
    voice_left = $('.voice_bar_out').offset().left;
    voice_width = $('.voice_bar_out').width();
});
$(function () {
    bar_left = $('.bar_out').offset().left;
    bar_width = $('.bar_out').width();
    voice_width = $('.voice_bar_out').width();
    voice_left = $('.voice_bar_out').offset().left;
    var before = '';
    var top_left = ['./imgs/collect.png', './imgs/no_collect.png', './imgs/now_play.png'];
    var audio = $('audio')[0];
    var duration_time = '00:00';
    var current_time = '00:00';
    var current_s = 0;//秒
    var duration_s = 0;//秒
    var T;
    show_collect();
    /**
     * 上一曲
     */
    $('.btn_box a:eq(0)').click(function () {
        change('prv');
    });
    /**
     * 下一曲
     */
    $('.btn_box a:last-child').click(function () {
        change('next');
    });

    /**
     * 切换歌曲
     * @status  prv:上一曲   next:下一曲
     */
    function change(status) {
        var now_play = $('.now_play');
        if (now_play) {
            var index = now_play.index();
            var eq = status == 'prv' ? parseInt(index - 1) : parseInt(index + 1);
            eq > $('.top_left ul li').length - 1 && (eq = 0);
            eq < 0 && (eq = $('.top_left ul li').length - 1);
        }
        else {
            eq = 0;
            before = $('.top_left li img:eq(0)').attr('src');
        }
        var li = $('.top_left ul li:eq(' + eq + ')');
       	change_music(li[0]);
    }
    //播放
    $('.top_left li').click(function () {
       	change_music(this); 
    });

    function change_music(_this){
    	before && $('.now_play img').attr('src', before);
        before = $(_this).find('img').attr('src');
        $('.top_left li').removeClass('now_play');
        $(_this).addClass('now_play');
        $(_this).find('img').attr('src', './imgs/now_play.png');
        var author = $(_this).find('a').text().split('-')[0];
        var music_name = $(_this).find('a').text().split('-')[1];
        $('.music_header').css({'animation': ''});//头像转动
        play_music($(_this).attr('music'), author, music_name);
    }

    //收藏
    $('.top_left img').click(function (e) {
        e.stopPropagation();
        var li = $(this).parent().parent();
        if (li.attr('class').indexOf('now_play') > -1) return false;
        if (li.attr('class').indexOf('no') > -1) {//没有收藏
            $(this).attr('src', top_left[0]);
            li.attr('class', 'collect');
        } else {//收藏
            $(this).attr('src', top_left[1]);
            li.attr('class', 'no_collect');
        }
        show_collect();
    });

    /**
     * 显示收藏列表
     */
    function show_collect() {
        var str = '';
        var li = $('.top_left li');
        for (var i = 0, len = li.length; i < len; i++) {
            var text = $(li[i]).find('a').text();
            if ($(li[i]).attr('class').indexOf('no_collect') > -1) {
                continue;
            } else {
                str += ' <li>\
                    <p><a title=' + text + ' href="javascript:;">' + text + '</a></p>\
                </li>';

            }
        }
        $('.top_right ul').html(str);
    }

    /**
     * 播放
     * @param music_src     歌曲链接
     * @param music_author  歌曲作者
     * @param music_name    歌曲名字
     */
    function play_music(music_src, music_author, music_name) {
        audio.src = music_src;
        $('#music_author').text(music_author);
        $('#music_name').text(music_name);
        judge_paused();
    }

    $('#play_pause').click(function () {
        judge_paused();
    });


    /**
     * 显示时间 进度条
     */
    function set_time() {
        current_s = audio.currentTime;
        duration_s = audio.duration;
        set_bar(current_s / duration_s);
        current_time = time_shift(current_s);
        duration_time = time_shift(duration_s);
        if (current_time == duration_time) {//歌曲播放完毕
            audio.pause();
            judge_paused();
        }

        $('.bar span:first-child').text(current_time);
        $('.bar span:last-child').text(duration_time);
    }

    /**
     * 设置进度条
     * @ratio   比例
     */
    function set_bar(ratio) {
        var bar_in_width = parseInt($('.bar_out').width() * ratio + 10);
        $('.bar_in').width(bar_in_width);
    }

    /**
     * 判断是否暂停
     */
    function judge_paused() {
        if (audio.paused && audio.src) {
            audio.play();
            $('#play_pause').css('background', 'url(./imgs/pause.png)');
            T = setInterval(set_time, 1000);
            setTimeout(function () {
                $('.music_header').css({'animation': 'change 25s linear infinite'});//头像转动
            }, 100);
            $('.bar_btn').mousedown(function () {
                draw_bar();
            });
            return 'play';
        } else {
            clearInterval(T);
            audio.pause();
            $('#play_pause').css('background', 'url(./imgs/play.png)');
            $('.music_header').css({'AnimationPlayState': 'paused'});//暂停转动
            reset();
            return 'pause';
        }
    }

    $('.voice_bar_in').on("touchstart", function(e) {
       $('.voice_bar_in').on("touchmove", function(e) {
           e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
     var x = moveEndX- voice_left;
           // var x = e.clientX - voice_left;
           if(x > 0 && x < voice_width){
               $('.voice_bar_in').width(x+7);
               audio.volume = x/(voice_width);
           }
       });
        $('.voice_bar_in').on("touchend", function(e) {
            $('.voice_bar_in').unbind('touchmove');
       })
    });


    /**
     * 拖拽进度条
     */
    function draw_bar() {
        /**
         * 通过进度条比例设置当前播放时间
         * 
         */
   $('.bar_btn').on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
        // $(window).mousemove(function (e) {
            var x = moveEndX;
            if (x > bar_left && x < bar_left + bar_width) {
                var now_width = x - bar_left;
                var ratio = now_width / bar_width;//比例
                $('.bar_in').width(now_width);
                audio.currentTime = duration_s * ratio;
            }
        });
      $(window).on("touchend", function(e) {
            $(this).unbind('touchmove');
        })
    }

    /**
     * 重置拖拽
     */
    function reset() {
        $('.bar_btn').unbind('touchend');
        $(window).unbind('touchmove');
    }

    /**
     * 时间转换
     * @param time
     */
    function time_shift(time) {
        var m = parseInt(time / 60) < 10 ? '0' + parseInt(time / 60) : parseInt(time / 60);
        var s = parseInt(time % 60) < 10 ? '0' + parseInt(time % 60) : parseInt(time % 60);
        var date = m + ':' + s;
        return date;
    }
});



$('.back-btn').on('click',function(){
   window.location.href = "http://192.168.0.11/views/index.html"
})