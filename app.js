///////////////////////////////////////////////////
const routes = {
  '/home': { templateId: 'home' },
  '/about': { templateId: 'about' },
};

//prevent browser default behaviour
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/home');
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const page = document.getElementById('page');
  page.innerHTML = '';
  page.appendChild(view);
}

function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

window.onpopstate = () => updateRoute();
updateRoute('about');

//////////////////////////////////////////////////////////////