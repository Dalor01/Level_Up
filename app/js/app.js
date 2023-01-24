import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'slick-carousel/slick/slick.min.js'
document.addEventListener('DOMContentLoaded', () => {
    $('.reviews__slide-wrapper').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    })
    const root = document.querySelector('#countdown')
    let time = 1800

    setInterval(updateCount, 1000)

    function updateCount() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds:seconds
    root.innerHTML = `${minutes}: ${seconds}`
    time--
    }
})


