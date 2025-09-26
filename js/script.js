$(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        speed: 1500,
        pauseOnHover: false
    });
    $('.nav').hover(
        function () {
            $(this).animate({ 'opacity': 0.6 }, 300);
        });
    $('.nav').mouseleave(
        function () {
            $(this).animate({ 'opacity': 1.0 }, 300);
        });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    $('.to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault(); // デフォルトのジャンプ動作を無効化

        var target = $($(this).attr('href')); // hrefに書かれたID要素を取得
        if (target.length) {
            $('html, body').animate(
                { scrollTop: target.offset().top }, // 対象の位置までスクロール
                600,                                // 所要時間（ms）
                'swing'                             // イージング（'linear' も可）
            );
        }
    });
    $(window).on('scroll', function () {
        $('.fadeIn').each(function () {
            var elemPos = $(this).offset().top;  // 要素のページ上部からの位置
            var scroll = $(window).scrollTop();  // 現在のスクロール量
            var windowHeight = $(window).height(); // 画面の高さ

            // 画面下から100px手前でフェードイン開始
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('show');
            }
        });
    });
    // Works の画像をクリック
    $('.works-inner .item img').on('click', function () {
        var imgSrc = $(this).attr('src');        // クリックされた画像のパスを取得
        $('#modal-img').attr('src', imgSrc);     // モーダル内の画像にセット
        $('#modal').fadeIn();                    // モーダルを表示
    });

    // ×ボタン または モーダルの背景クリックで閉じる
    $('.close, #modal').on('click', function (e) {
        // 画像そのものをクリックした時は閉じないように
        if (e.target !== $('#modal-img')[0]) {
            $('#modal').fadeOut();
        }
    });
});




