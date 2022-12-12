<?php get_header(); ?>
<div id="primary" class="content-area pagebuilder-content">
    <h1 class="visuallyhidden">Конакты</h1>
    <section class="contacts-social-block">
        <div class="contacts-map">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A99e065dbcd0ed2b2acdba830b90644484bbf2b7c0fe6af5cbc2c81f4217b49d5&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>
        </div>
        <div class="about-section">
            <div class="contacts-social">
                <div class="h2">
                    Городская санитарная служба <span class="accent-text">EcoDez</span>
                </div>
                <a href="tel:+375447986686">
                    <svg class="footer-icon">
                        <use href="/wp-content/themes/ecodez/assets/images/sprite.svg#phone"></use>
                    </svg>
                    <span>
                        +375 (44) 798-66-86
                    </span>
                </a>
                <a href="mailto:info@ecodez.by">
                    <svg>
                        <use href="/wp-content/themes/ecodez/assets/images/sprite.svg#mail"></use>
                    </svg>
                    info@ecodez.by
                </a>
                <a class="messengers" target="_blank" href="https://www.instagram.com/eco_dez.by/?igshid=YmMyMTA2M2Y%3D">
                    <svg>
                        <use href="/wp-content/themes/ecodez/assets/images/sprite.svg#instagram"></use>
                    </svg>
                    @ecodez.by
                </a>
                <div class="contacts-title">
                    <span>Минск, ул. Громова 20</span>
                    <span>Принимаем звонки 24/7</span>
                </div>
            </div>
        </div>
    </section>
    <section class="contacts-form bottom-form">
        <div class="cta-block">
            <div class="cta-first-block">
                <div class="cta-percent"><span class="transparent-text">%</span>
                </div>
                <div>
                    <div class="cta-title">Скидка <span class="transparent-text">10%</span></div>
                    <p class="cta-subtitle">При оформлении заявки на сайте</p>
                </div>
            </div>
            <hr>
            <div class="flex-list">
                <div class="services-page-image">
                    <?php echo do_shortcode("[responsive imageid='63' sizeimg='large']"); ?>
                </div>
                <div class="cta-form">
                    <?php echo do_shortcode('[contact-form-7 id="22" title="Форма попап"]'); ?> </div>
            </div>
        </div>
    </section>
</div>
<?php get_footer(); ?>
<?php wp_footer() ?>