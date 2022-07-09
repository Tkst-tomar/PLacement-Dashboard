import React, { useEffect, useState } from 'react'

export default function Validation(props) {
    let { status, label, value, reqValue, passMsg, passNegMsg } = props
    const [count, setCount] = useState(0)

    // const [label,setlabel] = useState()
    const [cls, setCls] = useState('msgHide')
    // const [st,setSt] = useState('err')
    const [msg, setMsg] = useState('This is the Message')

    useEffect(() => {
        if (status == true) {
            if(passNegMsg == true){
                setMsg(label)
                setCls('msgShow err')
            }else if(passMsg == true){
                setMsg(label)
                setCls('msgShow success')
            }else if (value == '' || value == undefined) {
                setMsg(`Please enter ${label}`)
                setCls('err  msgShow')
            } else if (value != reqValue) {
                setMsg(`${label} does not match`)
                setCls(`err  msgShow`)
            }
        }

        setTimeout(() => {
            setCls(`msgHide`)
            // alert('After 3 Seconds')
        }, 3000);
    }, [status])


    return (
        <div className='container'>
            <div className={cls}>
                {msg}
            </div>
        </div>
    )
}
