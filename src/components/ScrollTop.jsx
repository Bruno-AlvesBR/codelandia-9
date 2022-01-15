import React, { useState } from 'react'
import { Content } from '../layout/ScrollTop-styled'
export default function ScrollTop() 
{
    const [scroll, setScroll] = useState(false)
    const windowScroll = () =>
    {
        if(window.scrollY > 100) setScroll(true)
        else setScroll(false)
    }
    window.addEventListener('scroll', windowScroll)
    const clickToTop = () => window.scrollTo(0, 0)
    return (
        <Content>
            <div onClick={clickToTop} className={scroll ? 'active' : ''}>
                <i className='bx bx-chevron-up' />
            </div>
        </Content>
    )
}
