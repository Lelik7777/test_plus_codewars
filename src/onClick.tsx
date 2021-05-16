import React from 'react';
export  function User(){
    return<div>
        Alex
        <button>active</button>
        <button onClick={deleteB }>delete</button>
    </div>
}
function deleteB(){
    alert('delete');
}