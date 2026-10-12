// Mobile menu for the navbar (see ../components/Navbar.astro). Same behaviour and classes as the old
// site's menu, which the site CSS styles: opening moves the menu into the full-height overlay and slides
// it down; closing slides it up and puts it back. Closes on outside click, Escape, or a wide window.
const OPEN_ATTRIBUTE = 'data-nav-menu-open';

const nav = document.querySelector<HTMLElement>('.w-nav');
const menu = nav?.querySelector<HTMLElement>('.w-nav-menu');
const button = nav?.querySelector<HTMLElement>('.w-nav-button');
const overlay = nav?.querySelector<HTMLElement>('.w-nav-overlay');

if (nav && menu && button && overlay) {
  const home = menu.previousElementSibling;
  const links = menu.querySelectorAll('.w-nav-link');
  const duration = Number(nav.dataset.duration ?? 400);
  const transition = (easing = 'ease') => `transform ${duration}ms ${easing}`;
  // Closed position: moved up by the navbar plus menu height, so the menu is out of sight.
  const hiddenOffset = () => `translateY(${-(nav.offsetHeight + menu.offsetHeight)}px)`;
  let open = false;

  const reset = () => {
    menu.removeAttribute(OPEN_ATTRIBUTE);
    menu.style.transition = menu.style.transform = '';
    links.forEach((link) => link.classList.remove('w--nav-link-open'));
    home?.after(menu);
    overlay.removeAttribute('style');
    button.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    open = true;
    menu.removeEventListener('transitionend', reset); // reopened while still closing
    menu.setAttribute(OPEN_ATTRIBUTE, '');
    links.forEach((link) => link.classList.add('w--nav-link-open'));
    button.classList.add('w--open');
    overlay.style.height = `${document.body.offsetHeight - nav.offsetHeight}px`;
    overlay.style.display = 'block';
    overlay.append(menu);

    menu.style.transform = hiddenOffset();
    menu.getBoundingClientRect(); // apply the start position before transitioning from it
    menu.style.transition = transition(nav.dataset.easing);
    menu.style.transform = 'translateY(0)';
    button.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = (animate = true) => {
    if (!open) return;
    open = false;
    button.classList.remove('w--open');
    if (!animate) return reset();

    menu.style.transition = transition(nav.dataset.easing2);
    menu.style.transform = hiddenOffset();
    menu.addEventListener('transitionend', reset, { once: true });
  };

  const toggle = () => (open ? closeMenu() : openMenu());

  button.addEventListener('click', toggle);
  button.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggle();
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !open) return;
    closeMenu();
    button.focus();
  });
  document.addEventListener('click', (event) => {
    const target = event.target as Element;
    if (open && !menu.contains(target) && !button.contains(target)) closeMenu();
  });
  // The button is only shown below the collapse width; past it the menu is inline again.
  window.addEventListener('resize', () => {
    if (open && getComputedStyle(button).display === 'none') closeMenu(false);
  });
}
