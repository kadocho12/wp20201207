<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <link rel="canonical" href="/">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="shortcut icon" href="/favicon.ico">
  </head>
  <body <?php body_class("preload"); ?> id="top">
    <!--全体のコンテナー
    -->
    <div class="l-root-container ">
      <header class="l-header p-header" id="js-header">
        <div class="l-container">
          <div class="p-header__inner">
            <div class="p-header__logo"><a class="p-header__logo-link" href="<?php echo esc_url( home_url() ); ?>"></a></div>
            <nav class="p-header__nav" id="js-main-menu-area">
              <ul class="p-header-menu">
                <li class="p-header-menu__item"><a class="p-header-menu__link" href="/"><span class="p-header-menu__text">ホーム</span></a></li>
                <li class="p-header-menu__item"><a class="p-header-menu__link" href="/about/"><span class="p-header-menu__text">私たちについて</span></a></li>
                <li class="p-header-menu__item"><a class="p-header-menu__link" href="/works/"><span class="p-header-menu__text">実績</span></a></li>
                <li class="p-header-menu__item"><a class="p-header-menu__link" href="/services/"><span class="p-header-menu__text">サービス</span></a></li>
                <li class="p-header-menu__item"><a class="p-header-menu__link" href="/news/"><span class="p-header-menu__text">お知らせ</span></a></li>
                <li class="p-header-menu__item"><a class="p-header-menu__link" href="/contact/"><span class="p-header-menu__text">お問い合わせ</span></a></li>
              </ul>
            </nav>
            <button class="p-hamburger" id="js-main-menu-trigger" aria-expanded="false" aria-controls="js-main-menu-area"><span class="p-hamburger__line"><span class="u-visuallyHidden">メニューを開閉する</span></span><span class="p-hamburger__title"><span class="p-hamburger__title-menu1">メニュー</span><span class="p-hamburger__title-menu2">閉じる</span></span></button>
          </div>
        </div>
      </header>
      <!-- 画面固有のコンテンツを格納するコンテナー-->
      <div class="l-main">
        <div class="p-breadcrumbs -onVisual">
          <ul class="p-breadcrumbs__inner">
            <li class="p-breadcrumbs__item"><a href="/">ホーム</a></li>
            <li class="p-breadcrumbs__item">お知らせ</li>
          </ul>
        </div>
        <section class="l-spacer -medium -pageTop -news">
          <div class="l-container -small">
            <h1 class="p-page-heading">News<span class="p-page-heading__sub">お知らせ</span></h1>
          </div>
        </section>
        <div class="l-spacer -large">
          <div class="l-container -small">
            <section class="l-spacer -h2">
              <h2 class="c-heading -lv_2">お知らせ一覧</h2>
              <div class="p-news">
                <div class="p-news__list">
                <?php if ( have_posts() ) :?>
                  <?php while( have_posts() ) : the_post(); ?>
                  <article class="p-news__item"><a class="p-news__link" href="<?php the_permalink(); ?>">
                      <div class="p-news__info">
                        <time class="p-news__date" datetime="2020-07-29">2020.07.29</time>
                        <?php the_category(); ?>
                      </div>
                      <p class="p-news__text"><?php the_title(); ?></p></a></article>
                      <!-- <div class="p-news__info">
                        <time class="p-news__date" datetime="2020-07-29">2020.07.29</time><span class="p-news__category -news">お知らせ</span>
                      </div>
                      <p class="p-news__text">WebメディアのMEDIAMEDIAに掲載されました。</p></a></article> -->
                  <?php endwhile; ?>
                  <!-- <article class="p-news__item">
                        <a class="p-news__link" href="/news/detail/">
                          <div class="p-news__info">
                            <time class="p-news__date" datetime="2020-03-05">2020.03.05</time><span class="p-news__category -news">お知らせ</span>
                          </div>
                          <p class="p-news__text">新型コロナウイルス対策について</p>
                        </a>
                      </article>
                  <article class="p-news__item"><a class="p-news__link" href="/news/detail/">
                      <div class="p-news__info">
                        <time class="p-news__date" datetime="2020-02-01">2020.02.01</time><span class="p-news__category -blog">ブログ</span>
                      </div>
                      <p class="p-news__text">FLOCSSの考え方</p></a></article>
                  <article class="p-news__item"><a class="p-news__link" href="/news/detail/">
                      <div class="p-news__info">
                        <time class="p-news__date" datetime="2020-01-18">2020.01.18</time><span class="p-news__category -blog">ブログ</span>
                      </div>
                      <p class="p-news__text">JavaScriptのES6で書いてみた</p></a></article>
                  <article class="p-news__item"><a class="p-news__link" href="/news/detail/">
                      <div class="p-news__info">
                        <time class="p-news__date" datetime="2019-12-20">2019.12.20</time><span class="p-news__category -news">お知らせ</span>
                      </div>
                      <p class="p-news__text">年末年始の営業について</p></a></article> -->
                <?php else : ?>
                  <p>投稿がありません。</p>
                <?php endif; ?>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section class="l-spacer -medium -gradient">
          <div class="l-container">
            <div class="c-grid -justify p-contact">
              <div class="c-grid__item -sp12Of12">
                <h2 class="p-home-section__heading -spCenter"><span class="p-home-section__head js-text-animation">Contact</span><span class="p-home-section__heading-sub">お問い合わせ</span></h2>
                <p class="p-home-section__paragraph -spCenter">お仕事の連絡はこちらからお気軽に<br class="u-show-XS">お問い合わせください。</p>
              </div>
              <div class="c-grid__item -middle -row -sp12Of12">
                <div class="p-contact__info">
                  <div class="p-contact__tel"><a class="p-tel" href="tel:000-0000-0000">000-0000-0000</a></div>
                  <div class="p-contact__button"><a class="c-button -white" href="/contact/"><span>お問い合わせはこちら</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="p-page-top" id="js-page-top"><a href="#top"><span>Page Top</span></a></div>
      <footer class="l-footer p-footer">
        <div class="l-spacer -footerBody">
          <div class="l-container">
            <div class="p-footer__body">
              <div class="p-footer__company">
                <div class="p-footer__logo"><a class="p-footer__logo-link"></a></div>
                <ul class="p-footer__address">
                  <li class="p-footer__address-item">〒000-0000</li>
                  <li class="p-footer__address-item">北海道札幌市無無市無無区0-00</li>
                </ul>
              </div>
              <div class="p-footer__info">
                <ul class="c-grid -gutter p-footer__info-list">
                  <li class="c-grid__item -sp12Of12 -tab6Of12 p-footer__info-item"><a href="/">ホーム</a></li>
                  <li class="c-grid__item -sp12Of12 -tab6Of12 p-footer__info-item"><a href="/about/">私たちについて</a></li>
                  <li class="c-grid__item -sp12Of12 -tab6Of12 p-footer__info-item"><a href="/works/">実績</a></li>
                  <li class="c-grid__item -sp12Of12 -tab6Of12 p-footer__info-item"><a href="/services/">サービス</a></li>
                  <li class="c-grid__item -sp12Of12 -tab6Of12 p-footer__info-item"><a href="/news/">お知らせ</a></li>
                  <li class="c-grid__item -sp12Of12 -tab6Of12 p-footer__info-item"><a href="/contact/">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="l-spacer">
          <div class="p-footer__bottom">
            <div class="l-container">
              <div class="p-footer__copy"><small>copyright@webweb</small></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <?php wp_footer(); ?>
  </body>
</html>