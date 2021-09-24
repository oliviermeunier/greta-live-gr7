'use strict';

function insertTriggerResources() {
  const cible   = document.querySelector('#resources');
  const overlay   = document.querySelector('.resource-overlay');
  if(cible !== null) {
    const trigger = document.createElement('img');
    //Support CSS
    const supportCSS = document.createElement('link');

    // Couleur du trigger
    const header = document.querySelector('body > header');
    const cssHeader = getComputedStyle(header);
    trigger.style.color = cssHeader.color;
    //console.log(cssHeader);

    trigger.src = '.resources/img/info-circle-solid.svg';
    trigger.setAttribute('role','button');
    trigger.classList.add('resources-toggle');
    trigger.setAttribute('title','Support pédagogique');
    trigger.setAttribute('alt','Support pédagogique');
    trigger.setAttribute('aria-pressed','false');
    //trigger.textContent = '?';

    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      window.scroll(0,0);
      const pressed = this.getAttribute('aria-pressed') == 'true';
      trigger.setAttribute('title', pressed ? 'Support pédagogique' : 'Fermer');
      trigger.style.color = pressed ? cssHeader.color : '#000000';
      trigger.setAttribute('aria-pressed', pressed ? 'false' : 'true');
      //trigger.textContent = pressed ? '?' : 'x';
      overlay.classList.toggle('is-open');
      setTimeout( function(){window.scroll(0,0), 500});
    });
    supportCSS.setAttribute('href','.resources/css/resources.css');
    supportCSS.setAttribute('rel','stylesheet');
    document.head.appendChild(supportCSS);
    document.body.appendChild(trigger);
  }
}

function insertMarkdownComponent() {

  const mdFile = document.querySelector('[data-md]').dataset.md;
  const overlay = document.createElement('div');
  overlay.classList.add('resource-overlay');
  const closeButton = document.createElement('img');
  closeButton.src = '.resources/img/times-solid.svg';
  closeButton.classList.add('resrouce-overlay-close-button');
  closeButton.addEventListener('click', () => {
      document.querySelector('.resource-overlay').classList.remove('is-open');
  });
  overlay.appendChild(closeButton);
  const supportComponent = document.createElement('zero-md');
  const script1 = document.createElement('script');
  const script2 = document.createElement('script');

  // Web-component
  script1.src = '.resources/js/webcomponents-loader.min.js';
  script2.src = '.resources/js/zero-md.min.js';
  script2.setAttribute('type','module');

  supportComponent.setAttribute('id','resources');
  supportComponent.classList.add('resources');
  supportComponent.setAttribute('src', mdFile);
  //supportComponent.setAttribute('manual-render','true');
  //supportComponent.setAttribute('css-urls','["./resources/css/markdown.css"]');

  // Insertion webComponent
  overlay.appendChild(supportComponent);
  document.body.appendChild(overlay);
  document.body.appendChild(script1);
  document.body.appendChild(script2);

  // Insertion trigger si traduction OK
  supportComponent.addEventListener('zero-md-rendered', function(){
    insertTriggerResources();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  insertMarkdownComponent();
});
