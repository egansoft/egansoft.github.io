$(function($){
    $(document).ready(function() {
        $('#navbar-wrap').stickUp({
            parts: {
                0:'home',
                1:'about',
                2:'portfolio',
                3:'work',
                4:'skills',
                5:'contact'
            },
            itemClass: 'nav-item',
            itemHover: 'active'
        })
    })
})

;(function(Shine){
    var shine = new Shine(document.getElementById('banner-name'), new shinejs.Config({
        numSteps: 5,
        opacity: 0.28,
        opacityPow: 1.2,
        offset: 0.15,
        offsetPow: 3.2,
        blur: 48,
        blurPow: 1
    }))

    window.addEventListener('mousemove', function(event){
        shine.light.position.x = event.clientX
        shine.light.position.y = event.clientY
        shine.draw()
    }, false)

})(Shine)

particlesJS('particles', {
    particles: {
        color: '#686868',
        color_random: false,
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: {
            opacity: 1,
            anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0,
                sync: false
            }
        },
        size: 4,
        size_random: true,
        nb: 150,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#686868',
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'window', // "canvas" or "window"
        mode: 'grab', // "grab" of false
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 1
            },
            onresize: {
                enable: true,
                mode: 'out', // "out" or "bounce"
                density_auto: false,
                density_area: 800 // nb_particles = particles.nb * (canvas width *	canvas height / 1000) / density_area
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
})

// $.stellar()
