import { useEffect } from 'react'

declare global {
  interface Window {
    jQuery: any
    $: any
  }
}

export const useTemplateScripts = () => {
  useEffect(() => {
    // Esperar a que jQuery y los plugins estén cargados
    const initScripts = () => {
      if (typeof window.$ !== 'undefined') {
        // Inicializar WOW.js para animaciones
        if (typeof (window as any).WOW !== 'undefined') {
          new (window as any).WOW().init()
        }

        // Inicializar carruseles Slick
        const $ = window.$
        
        // Carrusel principal
        $('.vs-carousel').each(function (this: any) {
          const $this = $(this)
          const slideShow = $this.data('slide-show') || 1
          const mdSlideShow = $this.data('md-slide-show') || slideShow
          const lgSlideShow = $this.data('lg-slide-show') || mdSlideShow
          const arrows = $this.data('arrows') !== false
          const fade = $this.data('fade') === true

          if (!$this.hasClass('slick-initialized')) {
            $this.slick({
              slidesToShow: slideShow,
              slidesToScroll: 1,
              arrows: arrows,
              fade: fade,
              dots: false,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: lgSlideShow,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: mdSlideShow,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ],
            })
          }
        })

        // Inicializar data-bg-src
        $('[data-bg-src]').each(function (this: any) {
          const bgSrc = $(this).data('bg-src')
          if (bgSrc) {
            $(this).css('background-image', `url(${bgSrc})`)
          }
        })

        // Inicializar data-mask-src
        $('[data-mask-src]').each(function (this: any) {
          const maskSrc = $(this).data('mask-src')
          if (maskSrc) {
            $(this).css('mask-image', `url(${maskSrc})`)
            $(this).css('-webkit-mask-image', `url(${maskSrc})`)
          }
        })
      }
    }

    // Ejecutar después de un pequeño delay para asegurar que todo esté cargado
    const timer = setTimeout(initScripts, 100)

    return () => {
      clearTimeout(timer)
      // Limpiar slick si existe
      if (typeof window.$ !== 'undefined') {
        const $ = window.$
        $('.vs-carousel.slick-initialized').slick('unslick')
      }
    }
  }, [])
}
