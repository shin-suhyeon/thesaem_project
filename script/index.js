const visual = new Swiper('.visual',{
    autoplay:{delay:3000},
    /* effect:'fade', */
    effect:'horizontal',
    pagination: {
        el: '.bg1 .swiper-pagination',
    },
})
const cosmetics = new Swiper('.cosmetics',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 3,
    spaceBetween: 0,
    loop:'true',
})