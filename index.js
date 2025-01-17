const panels = document.querySelectorAll('.panel');

const openPanel = (event) => {
  panels.forEach((panel) => {
    panel.classList.remove('clicked');
    const pElements = panel.querySelectorAll('p');
    pElements && pElements[0] && pElements[0].classList.remove('clicked');
    pElements && pElements[2] && pElements[2].classList.remove('clicked');
  });

  event.target.classList.add('clicked');
  const pElements = event.target.querySelectorAll('p');
  pElements && pElements[0] && pElements[0].classList.add('clicked');
  pElements && pElements[2] && pElements[2].classList.add('clicked');
};

panels.forEach((panel) => {
  panel.addEventListener('click', openPanel);
});
