<?php

function blankslate_child_enqueue_scripts()
{
    $parent_style    = 'blankslate-style';
    $parent_base_dir = 'blankslate';
    wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css', array(), wp_get_theme($parent_base_dir) ? wp_get_theme($parent_base_dir)->get('Version') : '');
    wp_enqueue_style('blankslate-child-style', get_stylesheet_directory_uri() . '/style.css', array($parent_style), wp_get_theme()->get('Version'));
}

add_action('wp_enqueue_scripts', 'blankslate_child_enqueue_scripts');

function tevkori_get_img_alt($image)
{
    $img_alt = trim(wp_strip_all_tags(get_post_meta($image, '_wp_attachment_image_alt', true)));
    return $img_alt;
}
function tevkori_responsive_shortcode($atts)
{
    $atts = shortcode_atts(
        [
            'imageid' => 1,
            'classimg' => '',
            'sizeimg' => '',
            'alt'     => '',
        ],
        $atts
    );

    $imageid = $atts['imageid'];
    $classimg = $atts['classimg'];
    $sizeimg = $atts['sizeimg'];
    $alt = $atts['alt'];

    $image_alt = '';

    if ('' !== $alt) {
        $image_alt = $alt;
    } elseif ('' !== tevkori_get_img_alt($imageid)) {
        $image_alt = tevkori_get_img_alt($imageid);
    } else {
        $image_alt = get_the_title();
    }
    $attr = [
        'alt' => $image_alt,
    ];
    $img = wp_get_attachment_image($imageid, $sizeimg, false, $attr);
    return
        '<picture class="' . $classimg . '">
		' . $img . '
		<noscript><img src="' . wp_get_attachment_image_url($imageid, 'full') . '" alt="' . $image_alt . '"></noscript>
		</picture>';
}
add_shortcode('responsive', 'tevkori_responsive_shortcode');

function coupon_block()
{
    return ('<div class="cta-popup">
        <div class="cta-block cta-first-block cta-small-block">
            <div class="cta-title h1">Скидка <span class="transparent-text">10%</span></div>
            <div class="cta-button transparent-button">Получить</div>
        </div>
        <div class="cta-small-background">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 156" fill="none" preserveAspectRatio="none">
                <path d="M13.8281 90.1192L13.8354 90.1129L13.8423 90.1064L19.8964 84.4195C23.5628 80.9754 23.4526 75.1183 19.6594 71.8145L3.07414 57.3693C1.43876 55.9449 0.5 53.8824 0.5 51.7136V8C0.5 3.85786 3.85786 0.5 8 0.5H1192C1196.14 0.5 1199.5 3.85786 1199.5 8V51.6233C1199.5 53.8408 1198.52 55.9447 1196.82 57.3697L1179.86 71.598C1175.85 74.9554 1175.8 81.0954 1179.74 84.5241L1196.92 99.4694C1198.56 100.894 1199.5 102.958 1199.5 105.128V148C1199.5 152.142 1196.14 155.5 1192 155.5H7.99999C3.85786 155.5 0.5 152.142 0.5 148V105.128C0.5 102.958 1.4403 100.894 3.07799 99.4694L13.8281 90.1192Z" fill="url(#paint0_linear_1456_8384)" stroke="url(#paint1_linear_1456_8384)"/>
                <g id="coupon-wave" filter="url(#filter0_d_1456_8384)">
                    <path d="M313.142 36.5385C446.529 7.34894 487.147 72.4641 744 155H1V101.183L14.7971 89.5913L20.9844 83.9773C24.511 80.7774 24.4051 75.3355 20.7564 72.2659L1 55.6451V1C71.9194 29.5185 206.432 59.8901 313.142 36.5385Z" fill="url(#paint2_linear_1456_8384)"/>
                </g> 
                <g id="coupon-circle-big" filter="url(#filter1_d_1456_8384)">
                    <circle cx="calc(90% - 200px)" cy="78" r="200" fill="url(#paint3_linear_1456_8384)"/>
                </g>
                <g id="coupon-circle-medium" filter="url(#filter2_d_1456_8384)">
                    <circle cx="calc(90% - 200px)" cy="78" r="150" fill="url(#paint4_linear_1456_8384)"/>
                </g>
                <g id="coupon-circle-small" filter="url(#filter3_d_1456_8384)">
                    <circle cx="calc(90% - 200px)" cy="78" r="100" fill="url(#paint5_linear_1456_8384)"/>
                </g>
                <defs>
                <filter id="filter0_d_1456_8384" x="-25" y="-25" width="795" height="206" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1456_8384"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1456_8384"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1456_8384" result="shape"/>
                </filter>
                <filter id="filter1_d_1456_8384" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1456_8384"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1456_8384"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1456_8384" result="shape"/>
                </filter>
                <filter id="filter2_d_1456_8384" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1456_8384"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1456_8384"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1456_8384" result="shape"/>
                </filter>
                <filter id="filter3_d_1456_8384" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1456_8384"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1456_8384"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1456_8384" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1456_8384" x1="600" y1="0" x2="600" y2="156" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CEF9FF"/>
                <stop offset="1" stop-color="white"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1456_8384" x1="600" y1="0" x2="600" y2="156" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#CEF9FF"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1456_8384" x1="372.5" y1="1" x2="372.5" y2="155" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#CEF9FF"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1456_8384" x1="930" y1="-122" x2="930" y2="278" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#CEF9FF"/>
                </linearGradient>
                <linearGradient id="paint4_linear_1456_8384" x1="930" y1="-72" x2="930" y2="228" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#CEF9FF"/>
                </linearGradient>
                <linearGradient id="paint5_linear_1456_8384" x1="930" y1="-22" x2="930" y2="178" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#CEF9FF"/>
                </linearGradient>
                <clipPath id="clip0_1456_8384">
                <rect width="1200" height="156" rx="8" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>');
}
add_shortcode('coupon_block', 'coupon_block');
