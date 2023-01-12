window.addEventListener('scroll', e=>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})
// ниже регистрируем плагин ScrollTrigger i ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})