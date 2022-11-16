const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7575';
}

if (url.hostname === 'igor-chazov.github.io') {
  url.hostname = 'todos-api1.herokuapp.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = {
  root: root.origin,
  api: new URL('api/todos', url.href).href,
};

export default links;
