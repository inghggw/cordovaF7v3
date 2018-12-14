routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/acerca/',
    url: './pages/acerca.html',
  },
  {
    path: '/form/',
    url: './pages/formulario.html',
  },
  //PageLoaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {//Componentes AVANZADO
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Giovanny',
          lastName: 'Gonzalez',
          about: 'Hola, soy su instructor, éxitos!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Ruta defecto para una ruta no existente (404 page), DEBE ESTAR DE ULTIMO.
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
