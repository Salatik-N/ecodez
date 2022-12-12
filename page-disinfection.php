<?php get_header(); ?>
<div id="primary" class="content-area pagebuilder-content">
    <h1 class="visuallyhidden">Дезинфекция</h1>
    <section class="page-title">
        <div class="fullscreen-section__title">
            <p class="h1">
                Сделаем дезинфекцию от вирусов, бактерий и запахов за <span class="accent-text">1 час</span>
            </p>
        </div>
    </section>
    <section class="service-info double-image">
        <div class="flex-list">
            <div class="services-page-image">
                <?php echo do_shortcode("[responsive imageid='155' sizeimg='large']"); ?>
            </div>
            <div class="service-text">
                <div class="useful-material">Полезный материал</div>
                <div class="services-page-title">Дезинфекция</div>
                <p class="services-important-info">Основная цель дезинфекции – предупреждение развития инфекций. С этой целью существующие микробы и патогены уничтожаются или обезвреживаются. Для этого можно использовать различные стратегии, такие как дезинфицирующие средства или использование струй или пара.</p>
            </div>
        </div>
    </section>
    <section class="cta">
        <?php echo do_shortcode("[coupon_block]"); ?>
        <div class="cta-popup-block" id="cta-popup-block">
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
                        <?php echo do_shortcode("[responsive imageid='31' sizeimg='large']"); ?>
                    </div>
                    <div class="cta-form">
                        <?php echo do_shortcode('[contact-form-7 id="66" title="Форма CTA"]'); ?> </div>
                </div>
                <svg class="close-popup">
                    <use href="/wp-content/themes/ecodez/assets/images/sprite.svg#close-X"></use>
                </svg>
            </div>
        </div>
    </section>
    <section class="service-info-w-100 about-section">
        <div class="services-page-title ">Можно выделить следующие виды дезинфекции:</div>
        <div class="flex-list">
            <div class="about-working-block "> <span class="about-working-number"> 1 </span>
                <span class="about-working-title">Профилактическая</span>
                <p class="about-working-text">Дезинфекция помещений, помогающая предотвратить размножение бактерий.</p>
            </div>
            <div class="about-working-block "> <span class="about-working-number"> 2 </span>
                <span class="about-working-title">Текущая</span>
                <p class="about-working-text">Останавливает распространение уже существующего очага заражения.</p>
            </div>
            <div class="about-working-block "> <span class="about-working-number"> 3 </span>
                <span class="about-working-title">Заключительная </span>
                <p class="about-working-text">Проводится после удаления грибка или другого вируса.</p>
            </div>
        </div>
    </section>
    <section class="bottom-form">
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
                    <?php echo do_shortcode("[responsive imageid='154' sizeimg='large']"); ?>
                </div>
                <div class="cta-form">
                    <?php echo do_shortcode('[contact-form-7 id="66" title="Форма CTA"]'); ?> </div>
            </div>
        </div>
    </section>
</div>
<?php get_footer(); ?>
<?php wp_footer() ?>