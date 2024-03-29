export default () => {
  let scrollToAnchor: string | undefined = undefined;

  // Change navigation bar on scroll
  window.addEventListener('scroll', () => {
    // Get position
    const screenY: number = window.pageYOffset || document.documentElement.scrollTop;
    const nav: any = document.querySelector('nav');

    // Change navigation bar if position is grater than 10
    if (screenY > 10) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Auto navbar selection based on anchors
  const anchors: any = Array.from(document.querySelectorAll('.anchor'));
  const navItems: any = Array.from(document.querySelectorAll('nav ul li'));

  window.addEventListener('scroll', () => {
    anchors.map((anchor: any) => {
      // Get current position, position of anchor and position of upcoming anchor
      const anchorY = anchor.getBoundingClientRect().top + window.scrollY;
      const nextAnchorY = anchors[anchors.indexOf(anchor) + 1]?.getBoundingClientRect().top + window.scrollY || document.body.scrollHeight;
      const screenY = window.pageYOffset || document.documentElement.scrollTop;

      // Change selected navbar item if position is grater than anchors position and less than position of the next anchor
      // Do not change nav items on scroll if user clicked on nav item
      if (scrollToAnchor != undefined) navItems[anchors.indexOf(anchors.find((a: any) => a.id === scrollToAnchor))].classList.add('active');
      if (screenY >= anchorY - 10 && screenY <= nextAnchorY - 10) {
        if (!scrollToAnchor) navItems[anchors.indexOf(anchor)].classList.add('active');
        else if (anchor.id === scrollToAnchor) scrollToAnchor = undefined;
      } else if (!scrollToAnchor) navItems[anchors.indexOf(anchor)].classList.remove('active');
    });
  });

  // Scroll to anchor on navbar item click
  document.querySelectorAll('li[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Prevent nav items from activating while scrolling
        // Set all active items to normal
        // @ts-ignore
        scrollToAnchor = this.getAttribute('href').toString().replace('#', '');
        Array.from(document.querySelectorAll('nav ul li.active')).map(active => {
          active.classList.remove('active');
        });

        // Scroll to the anchor
        // @ts-ignore
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  // Back to top button
  window.addEventListener('scroll', () => {
    // Get Y position of screen and 2nd section

    // @ts-ignore
    const sectionY = document.querySelector('.services').getBoundingClientRect().top + window.scrollY;
    const screenY = window.pageYOffset || document.documentElement.scrollTop;
  
    const toTop = document.getElementById('to-top');
    if (screenY >= sectionY - 10) toTop?.classList.add('appear');
    else toTop?.classList.remove('appear');
  });
}