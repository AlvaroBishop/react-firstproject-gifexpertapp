import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => { // custom hook
    
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                }) 
            })
    }, [category] /* se llama cada vez que cambia la categoria */)
    

    return state;
}
