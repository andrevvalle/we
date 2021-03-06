var path = require('path');

module.exports = function run() {

  var open = require('open');

  var projectFolder = process.cwd();
  var we = require( path.resolve( projectFolder, 'node_modules/we-core' ));

  we.bootstrap(function(err, we) {
    if (err) return doneAll(err);

    var uid = process.argv[3];
    if (! Number(uid) ) return doneAll('Invalid Uid');

    we.db.models.user.find(uid)
    .done( function (err, user) {
      if(err) return doneAll(err);

      we.db.models.authtoken.create({
        'userId': user.id,
        tokenType: 'resetPassword'
      }).done(function (error, token) {
        if(error){
          we.log.error(error);
          return res.serverError(error);
        }

        if (!token) {
          return doneAll('unknow error on create auth token');
        }

        we.log.info('resetUrl>>', token.getResetUrl());

        open(token.getResetUrl());

        return doneAll();
      });
    });
  });

  function doneAll(err) {
    if ( err ) {
      we.log.error('Error on set user as admin', err);
    }
    //sails.load();
    // end / exit
    process.exit();
  }
};