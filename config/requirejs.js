module.exports.requirejs = {
  paths: {
    domReady: 'js/libs/requirejs/domReady',
    jquery: 'bower_components/jquery/dist/jquery',
    io: 'js/libs/socket.io',
    'sails.io': 'js/sails.io',
    app: 'js/app',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    moment: 'bower_components/moment/min/moment-with-langs.min',
    'moment-pt-br': 'bower_components/moment/lang/pt-br',
    /** @todo remove async from client side */
    async: 'bower_components/async/lib/async',
    handlebars: 'js/libs/handlebars',
    // ember
    ember: 'bower_components/ember/ember',
    'ember-data': 'bower_components/ember-data/ember-data',
    'ember-data-sails-adapter': 'bower_components/ember-data-sails-adapter/ember-data-sails-adapter',
    'ember-i18n': 'bower_components/ember-i18n/lib/i18n',
    'ember-auth': 'bower_components/ember-auth/dist/ember-auth',
    // showdown for show markup
    'showdown': 'bower_components/showdown/src/showdown',
    // precompiled ember templates
    emberTemplates: 'templates.hbs',
    // wejs files
    we: 'bower_components/we/dist/we',
    //we.js plugin integration
    //weEmberPlugin: 'js/ember/weEmberPlugin',
    //emberApp: 'js/ember/emberApp',
    // starter script
    weCsCore: 'we-cs.js',
    starter: 'js/ember/starter',
    'ember-uploader': 'bower_components/ember-uploader/dist/ember-uploader',
    // wysiwyg editor
    summernote: 'wysiwyg/summernote/dist/summernote',
    codemirror: 'bower_components/codemirror/lib/codemirror',
    // typeahead and autocomplete select field
    select2: 'bower_components/select2/select2',
    // image cropper lib
    jcrop: 'bower_components/Jcrop/js/jquery.Jcrop'
  },
  shim: {
    bootstrap: {
      deps: [
        'jquery'
      ]
    },
    select2: {
      deps: [
        'bootstrap',
        'jquery'
      ]
    },
    jcrop: {
      deps: [
        'jquery'
      ]
    },
    app: {
      deps: [
        'io',
        'sails.io'
      ]
    },
    'sails.io': {
      deps: [
        'io'
      ]
    },
    ember: {
      deps: [
        'handlebars',
        'jquery'
      ],
      exports: "Ember"
    },

    'ember-data': {
      deps: [
        'ember'
      ]
    },

    'ember-data-sails-adapter': {
      deps: [
        'ember',
        'ember-data'
      ],
    },
    emberTemplates: {
      deps: [
        'ember',
        'handlebars',
      ]
    },
    'ember-uploader': {
      deps: [
        'ember',
        'handlebars'
      ]
    },
    'bs-button': {
      deps: [
        'ember',
        'handlebars',
        'bootstrap',
        'bs-core'
      ]
    },
    'bs-core': {
      deps: [
        'ember',
        'handlebars',
        'bootstrap'
      ]
    }
  },
  //baseUrl: '/',
  urlArgs: 'v=0.0.606',
  waitSeconds: 15,
  deps: [
    'starter'
  ],
};