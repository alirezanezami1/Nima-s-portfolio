import { onMounted, onUnmounted } from 'vue'
import 'animate.css'

export function useScrollAnimation() {
  let observer = null

  const initScrollAnimation = () => {
    // حذف observer قبلی اگر وجود دارد
    if (observer) {
      observer.disconnect()
    }

    // ایجاد Intersection Observer برای تشخیص عناصر در viewport
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // اضافه کردن کلاس انیمیشن وقتی عنصر در viewport قرار می‌گیرد
          const element = entry.target
          const animationClass = element.dataset.animation || 'animate__animated animate__fadeInUp'

          element.classList.add(...animationClass.split(' '))

          // حذف observer برای این عنصر بعد از اجرای انیمیشن
          observer.unobserve(element)
        }
      })
    }, {
      threshold: 0.1, // 10% از عنصر باید در viewport باشد
      rootMargin: '0px 0px -50px 0px' // انیمیشن کمی زودتر شروع شود
    })

    // اضافه کردن تمام عناصر با کلاس scroll-animate به observer
    const animatedElements = document.querySelectorAll('[data-scroll-animate]')
    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  }

  // تابع جدید برای اعمال انیمیشن روی کامپوننت‌ها با اسکرول
  const initComponentScrollAnimation = () => {
    // حذف observer قبلی اگر وجود دارد
    if (observer) {
      observer.disconnect()
    }

    // ایجاد Intersection Observer برای تشخیص کامپوننت‌ها در viewport
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          const animationClass = element.dataset.animation || 'animate__animated animate__fadeInUp'

          element.classList.add(...animationClass.split(' '))

          // حذف observer برای این عنصر بعد از اجرای انیمیشن
          observer.unobserve(element)
        }
      })
    }, {
      threshold: 0.1, // 10% از کامپوننت باید در viewport باشد
      rootMargin: '0px 0px -50px 0px' // انیمیشن کمی زودتر شروع شود
    })

    // اضافه کردن تمام کامپوننت‌ها با کلاس component-scroll-animate به observer
    const componentElements = document.querySelectorAll('[data-component-scroll-animate]')
    componentElements.forEach((element) => {
      observer.observe(element)
    })
  }

    // تابع جدید برای انیمیشن‌های اسکرول محور
  const initScrollBasedAnimation = () => {
    let scrollTimeout = null
    let animatedElements = []
    let isInitialized = false

    // مخفی کردن تمام عناصر در ابتدا
    const hideAllElements = () => {
      const elements = document.querySelectorAll('[data-scroll-based-animate]')
      elements.forEach((element) => {
        element.style.opacity = '0'
        element.style.transform = 'translateY(40px)'
        element.style.visibility = 'hidden'
        element.style.transition = 'none'
      })
    }

    const handleScroll = () => {
      // حذف timeout قبلی
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // تنظیم timeout جدید برای throttle کردن اسکرول
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight

        // پیدا کردن تمام عناصر با انیمیشن اسکرول
        const elements = document.querySelectorAll('[data-scroll-based-animate]')

        elements.forEach((element, index) => {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollY
          const elementHeight = rect.height

          // محاسبه درصد اسکرول برای این عنصر
          const scrollProgress = Math.max(0, Math.min(1,
            (scrollY + windowHeight - elementTop) / (windowHeight + elementHeight)
          ))

          // اگر عنصر هنوز انیمیشن نشده و در viewport قرار دارد
          if (scrollProgress > 0.1 && !animatedElements.includes(element)) {
            const animationClass = element.dataset.animation || 'animate__animated animate__fadeInUp'

                        // اضافه کردن تاخیر بر اساس index (کاهش یافته)
            const delay = index * 0.01

            setTimeout(() => {
              // نمایش عنصر
              element.style.visibility = 'visible'
              element.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'

              // اضافه کردن کلاس انیمیشن
              element.classList.add(...animationClass.split(' '))

              // تنظیم opacity و transform
              element.style.opacity = '1'
              element.style.transform = 'translateY(0)'
            }, delay * 1000)

            animatedElements.push(element)
          }
        })
      }, 50) // throttle به 50ms
    }

    // راه‌اندازی اولیه
    const initialize = () => {
      if (!isInitialized) {
        hideAllElements()
        isInitialized = true

        // اضافه کردن event listener برای اسکرول
        window.addEventListener('scroll', handleScroll, { passive: true })

        // اجرای اولیه برای عناصری که در ابتدا قابل مشاهده هستند
        handleScroll()
      }
    }

    // راه‌اندازی با تاخیر کوچک
    setTimeout(initialize, 100)

    // تابع cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }

  const addScrollAnimation = (element, animationClass = 'animate__animated animate__fadeInUp') => {
    if (element) {
      element.setAttribute('data-scroll-animate', 'true')
      element.setAttribute('data-animation', animationClass)

      // اگر observer فعال است، عنصر را به آن اضافه کن
      if (observer) {
        observer.observe(element)
      }
    }
  }

  const removeScrollAnimation = (element) => {
    if (element && observer) {
      observer.unobserve(element)
      element.removeAttribute('data-scroll-animate')
      element.removeAttribute('data-animation')
    }
  }

  onMounted(() => {
    // کمی تاخیر برای اطمینان از لود شدن DOM
    setTimeout(() => {
      initScrollAnimation()
    }, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimation,
    initComponentScrollAnimation,
    initScrollBasedAnimation,
    addScrollAnimation,
    removeScrollAnimation
  }
}
