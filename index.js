#!/usr/bin/env node

const readlineSync = require('readline-sync');

const username = readlineSync.question('User name: ');

const password = readlineSync.question('password: ', {
    hideEchoBack: true, // Hide the typed characters
    mask: '*', // Display '*' for each character
  });


console.log(' In processs...... ');

getPunchItems( username, password )

function getPunchItems( username, password )
{
    fetch('https://azule-test.pimshosting.com/CMS/PunchItems/?take=10',{
        method:'GET',
        headers:{
            'Authorization': ` Basic ${ btoa("mohamad@omega365.com:60sO72B4PCin8t" ) }`,
            'Accept': 'application/json'
        }
    })
    .then( res => res.json() )
    .then(  data=> {
        console.log(' data : ', data );
    })
    .catch( err=>{
        console.error(' error : ', err );
    } )
}