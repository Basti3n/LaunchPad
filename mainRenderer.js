const Data = require('./data.js');

function resetOthers(){
    $( '#table-pad' ).load( 'pages/random.html' );
    Data.reset();
}
function resetClassic(){
    $( '#table-pad' ).load( 'pages/padClassic.html' );
    Data.reset();
}
function resetInsect(){
    $( '#table-pad' ).load( 'pages/padInsect.html' );
    Data.reset();
}
function resetOrgue(){
    $( '#table-pad' ).load( 'pages/padOrgue.html' );
    Data.reset();
}