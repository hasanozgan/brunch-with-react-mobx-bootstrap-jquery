module.exports = {
  files: {
    javascripts: {
      joinTo: {
        '/js/vendor.js': /^(?!app)/,
        '/js/app.js': /^app/,
      },
    },

    stylesheets: {
      joinTo: {
        '/css/vendor.css': /^(?!app)/,
        '/css/app.css': /^app/,
      },
    },
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react', 'stage-1'],
      plugins: [
        'transform-decorators-legacy',
        'transform-object-assign',
        'array-includes',
      ],
    },
  },

  npm: {
    enabled: true,
    styles: {
      bootstrap: ['dist/css/bootstrap.min.css'],
    },
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
    },
  },
};
