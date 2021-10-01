import React from 'react';

const useDeep = () => {
    let retValue = ""
    for (let i = 1; i < document.location.pathname.split('/').length; i++) {
        retValue += "../"
    }
    console.log(retValue)
    return retValue
    
}

export{ useDeep };