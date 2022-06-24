import React from "react"
import Dummy from "./Dummy";
import Display from './Display.js'
export default function Ticket(props) {
    // let ticket = 234;
    // let fromPlace = 'gkp';
    // let PassName = 'amit';
    // let rs = 23;

    const data = Dummy.map((item) => {
        return <Display
        key={item.ticket}
            ticket={item.ticket}
            place={item.fromPlace}
            name={item.PassName}
            rs={item.rs} />
    })

    // let isValid = 'Invalid'
    // if (typeof (ticket) === 'number' && typeof (fromPlace) === 'string' &&
    //     typeof (PassName) === 'string' && typeof (rs) === 'number') {
    //     isValid = 'valid';
    // }
    // console.log('prdops',props)
    return (<div>
        {data}
        {/* <h4>Ticket:{ticket}</h4>
        <h4>fromPlace:{fromPlace}</h4>
        <h4>PassName:{PassName}</h4>
        <h4>rs:{rs}</h4>
        {< h1 > {isValid} Ticket </h1 >} */}
    </div>
    )


} 