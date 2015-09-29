var gobble = require( 'gobble' );

module.exports = gobble([
	gobble( '.htaccess' ),
	gobble( 'src' ).transform( 'include' )
]);
