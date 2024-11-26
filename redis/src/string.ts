import {client} from './client';

async function init () {
    await client.set('msg:5','Hello World')
    const result = await client.get('msg:5');
    console.log("result : "+ result);
    
}

init();