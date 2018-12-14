/* –––––––––––––––––––––––– F7 –––––––––––––––––––––– */

// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Plantilla F7 V3', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'Giovanny',
        lastName: 'Gonzalez',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Inicializar el Layout Vista principal "main-view"
var mainView = app.views.create('.view-main', {
  url: '/'
});

/* –––––––––––––––––––––––– CORDOVA –––––––––––––––––––––– */

document.addEventListener('deviceready', onDeviceReady.bind(this), false);
function onDeviceReady() {   
    app.dialog.alert('App cargada completamente');
  
};

/* –––––––––––––––––––––––– FUNCIONES –––––––––––––––––––––– */

// Accion Formulario Modal Login
$$('#my-login-screen .login-button').on('click', function () {
  //Capturar valores de los input
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Cerrar modal login
  app.loginScreen.close('#my-login-screen');

  // Alert con usuario y contraseña digitados
  app.dialog.alert('Usuario: ' + username + '<br>Constraseña: ' + password);
});



