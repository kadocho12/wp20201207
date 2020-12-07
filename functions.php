<?php
/*======================================
  コンテンツ幅
======================================*/
if ( !isset( $content_width ) ) {
  $content_width = 960;
}

/*======================================
初期設定
======================================*/
function portfoliodummysite_setup() {

  /*
    Titleタグ
  ----------------------------------- */
  add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'portfoliodummysite_setup' );

/*======================================
  スタイルの追加
======================================*/
function portfoliodummysite_scripts() {
  /*
    CSS
  ----------------------------------- */
  wp_enqueue_style( 'google-font', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' );
  wp_enqueue_style( 'portfoliodummysite-css', get_theme_file_uri() .'/assets/css/app.css' );
  wp_enqueue_style( 'portfoliodummysite-noto', get_theme_file_uri() .'/assets/common/css/noto.css' );
  wp_enqueue_style( 'portfoliodummysite-yakuhan', get_theme_file_uri() .'/assets/common/css/yakuhan.css' );

  /*
    JS
  ----------------------------------- */
  wp_enqueue_script( 'portfoliodummysite-first', get_theme_file_uri() .'/assets/js/first.bundle.js', ['jquery'], '1.0.0' );
  wp_enqueue_script( 'portfoliodummysite-vedor', get_theme_file_uri() .'/assets/common/js/vendor.js', ['jquery'], '1.0.0' );
  wp_enqueue_script( 'portfoliodummysite-main', get_theme_file_uri() .'/assets/js/main.bundle.js', ['jquery'], '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'portfoliodummysite_scripts' );

/*======================================
  JSにdefer属性を付与
======================================*/
function inspect_script_handles() {
  global $wp_scripts;

  foreach( $wp_scripts->queue as $handle ) {
    echo $handle,' ';
  }
}
add_action( 'wp_print_scripts', 'inspect_script_handles' );

add_filter('script_loader_tag', 'add_defer_script_loader_tag',10 , 2 );

function add_defer_script_loader_tag($tag, $handle){
  if ('portfoliodummysite-vedor'== $handle || 'portfoliodummysite-main'== $handle) {
		return str_replace( ' src', ' defer="defer" src', $tag );
  }
  
	return $tag;
}

/*======================================
  自動整形機能の無効化
======================================*/
function my_customize_mce_options( $init ) {
  global $allowedposttags;

  $init['valid_elements']          = '*[*]';
  $init['extended_valid_elements'] = '*[*]';
  $init['valid_children']          = '+a[' . implode( '|', array_keys( $allowedposttags ) ) . ']';
  $init['indent']                  = true;
  $init['wpautop']                 = false;
  $init['force_p_newlines'] = false;
  $init['force_br_newlines'] = true;
  $init['forced_root_block'] = '';

  return $init;
}

add_filter( 'tiny_mce_before_init', 'my_customize_mce_options' );