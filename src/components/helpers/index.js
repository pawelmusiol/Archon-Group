import { useState, useEffect} from 'react'

/* import React from 'react';

const useDeep = () => {
    let retValue = ""
    for (let i = 1; i < document.location.pathname.split('/').length; i++) {
        retValue += "../"
    }
    console.log(retValue)
    return retValue
    
}

export{ useDeep }; */

const useMargin = (Current, ContentData) => {
    const [Title, setTitle] = useState("0%")

    useEffect(() => {
        ContentData = ContentData.map(ct => {
            if (ct.name === Current) {
                ct.margin = 0
                setTitle(ct.title)
            }
            else ct.margin = '100vw'
            return ct
        })
        console.log(ContentData)
    }, [Current])
    return ContentData
}

export { useMargin }