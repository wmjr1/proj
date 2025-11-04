
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('header');
  const navItemList = header.querySelectorAll('li');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.classList.toggle('active');
    header.classList.toggle('open');
  });

navItemList.forEach(item=>{
  item.addEventListener("click", e=>{
    header.classList.toggle('open')
  })
})