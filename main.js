const menuBtn = document.getElementById('icon_menu')
const navMenu = document.getElementById('nav_menu')
const mask = document.getElementById('mask')

menuBtn.addEventListener('click', () => {

    navMenu.classList.toggle('show_menu')
    menuBtn.classList.toggle('icon_close')
    mask.classList.toggle('view_mask')

})

anime({
    targets: '.hero_info_title',
    opacity: [0, 1],
    translateY: [-80, 0],
    duration: 4500
})

anime({
    targets: '.hero_info_parag',
    opacity: [0, 1],
    translateY: [80, 0],
    delay: 200,
    duration: 2500
})

anime({
    targets: '.btn',
    opacity: [0,1],
    translateY: [60, 0],
    delay: 500,
    duration: 6500
})

anime({
    targets: '.hero_image_img',
    opacity: [0,1],
    translateY: [-60, 0],
    duration: 5500
})





