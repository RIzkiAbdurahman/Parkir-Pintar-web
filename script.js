// aktifkan nav link saat scroll
const links = document.querySelectorAll('.navlinks a');
const sections = Array.from(document.querySelectorAll('main section'));
function onScroll(){
  const scrollPos = window.scrollY + 120;
  let current = sections[0];
  for(const sec of sections){
    if(sec.offsetTop <= scrollPos) current = sec;
  }
  links.forEach(a=> a.classList.remove('active'));
  const target = document.querySelector('.navlinks a[href="#'+current.id+'"]');
  if(target) target.classList.add('active');
}
window.addEventListener('scroll', onScroll);
onScroll();

// smooth scroll for browsers that may not honor css
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null,'',href);
      }
    }
  })
})
