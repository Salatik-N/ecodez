<?php get_header(); ?>
<div id="primary" class="content-area pagebuilder-content">
    <h1 class="visuallyhidden">Дератизация от кротов</h1>
    <section class="page-title">
        <div class="fullscreen-section__title">
            <p class="h1">
                Избавим ваш участок от кротов за <span class="accent-text">1 час</span>
            </p>
        </div>
    </section>
    <section class="service-info">
        <div class="flex-list">
            <div class="services-page-image">
                <?php echo do_shortcode("[responsive imageid='180' sizeimg='large']"); ?>
            </div>
            <div class="service-text">
                <div class="useful-material">Полезный материал</div>
                <div class="services-page-title">Кроты</div>
                <p class="services-important-info">Кроты не являются бытовыми вредителями, но могут доставить большие неприятности и уничтожить урожай из-за нарушения экосистемы. Вывести кротов своими силами практически невозможно.</p>
                <p>Кроты не только наносят ущерб территории, но и могут полностью уничтожить корневую систему растений, они не питаются корнеплодами, но из-за его многочисленных ходов эти плоды, впрочем, как и простые корни растений и деревьев, остаются без контакта с почвой. В результате растение недополучает влагу и питательные вещества и высыхает. При обнаружении подземных ходов, немедленно обращайтесь к специалистам по дератизации. Помимо значительного урона, который наносят кроты земельным участкам, они могут стать переносчиками инфекционных заболеваний. Поэтому откладывать борьбу с грызунами – это крайне опасно. </p>
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
    <section class="service-info-w-100 about-section all-3-grid">
        <div class="services-page-title">Основные варианты борьбы с кротами:</div>
        <div class="flex-list">
            <div class="about-working-block with-image">
                <div class="about-working-image ">
                    <?php echo do_shortcode("[responsive imageid='178' sizeimg='large']"); ?>
                </div>
                <p class="services-important-info">Механический способ</p>
                <p class="about-working-text">Заключается в установке ловушек и капканов в основных ходах вредителей. Периодически проводим утилизацию пойманных животных, загружаем свежую приманку.</p>
            </div>
            <div class="about-working-block with-image">
                <div class="about-working-image">
                    <?php echo do_shortcode("[responsive imageid='179' sizeimg='large']"); ?>
                </div>
                <p class="services-important-info">Химический способ (фумигация)</p>
                <p class="about-working-text">Применяются специальные высокотоксичные средства. Смесь распыляют на участке на небольшом расстоянии от земли. Постепенно оседая на землю, препарат заполняет кротовины, проникает в ходы, делает опасным выход зверьков на поверхность.</p>
            </div>
            <div class="about-working-block with-image">
                <div class="about-working-image">
                    <?php echo do_shortcode("[responsive imageid='177' sizeimg='large']"); ?>
                </div>
                <p class="services-important-info">Ультразвуковые отпугиватели</p>
                <p class="about-working-text">Основаны на неспособности вредителей переносить звуковые волны определенной частоты.</p>
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
                    <?php echo do_shortcode("[responsive imageid='180' sizeimg='large']"); ?>
                </div>
                <div class="cta-form">
                    <?php echo do_shortcode('[contact-form-7 id="66" title="Форма CTA"]'); ?> </div>
            </div>
        </div>
    </section>
</div>
<?php get_footer(); ?>
<?php wp_footer() ?>