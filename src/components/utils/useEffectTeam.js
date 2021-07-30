import { useEffect, useState } from "react";
import React from 'react'

const useEffectTeam = (hero) => {

    const [state, setState] = useState({data: [], empty: true, selected:true });
    

    return state;
}


export default useEffectTeam
