export function useSmoothScroll() {
  const scrollToNextSection = () => {
    // پیدا کردن تمام عناصر با انیمیشن اسکرول
    const allElements = document.querySelectorAll('[data-scroll-based-animate]')

    if (allElements.length === 0) {
      // اگر هیچ عنصری پیدا نشد، به پایین صفحه اسکرول کن
      scrollToBottom()
      return
    }

    // پیدا کردن عنصر بعدی بر اساس موقعیت فعلی اسکرول
    const currentScrollY = window.scrollY
    let nextElement = null

    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i]
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + currentScrollY

      // اگر عنصر زیر موقعیت فعلی اسکرول قرار دارد
      if (elementTop > currentScrollY + 200) {
        nextElement = element
        break
      }
    }

    // اگر عنصر بعدی پیدا نشد، به پایین صفحه اسکرول کن
    if (!nextElement) {
      scrollToBottom()
      return
    }

    // اسکرول به عنصر بعدی
    scrollToElement(nextElement)
  }

  const scrollToElement = (element) => {
    if (!element) return

    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetPosition = scrollTop + rect.top - 150 // 150px offset از بالا

    // اسکرول نرم با مدت زمان کوتاه
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )

    window.scrollTo({
      top: documentHeight,
      behavior: 'smooth'
    })
  }

  return {
    scrollToNextSection,
    scrollToElement,
    scrollToBottom
  }
}
