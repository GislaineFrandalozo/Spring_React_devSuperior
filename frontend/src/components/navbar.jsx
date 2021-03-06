import React from 'react'
import { ReactComponent as GitHub } from '../assets/img/github.svg'
import '../assets/styles/navbar.css'
function Navbar() {
    return (
        <header className='col-12 dsmovie-navbar'>
            <nav className="px-5">
                <div className='row p-3 align-items-center'>
                    <div className='col text-light fs-2 fw-bold'>DSMovie</div>
                    <a className='col-auto' href="https://github.com/GislaineFrandalozo">
                        <div className="row gx-2">
                            <div className='col align-self-center' style={{ width: '2rem' }} >
                                <GitHub />
                            </div>
                            <div className="col d-flex">
                                <p className='m-2 mt-2 pt-1 fs-6 text-light'>/GislaineFrandalozo</p>
                            </div>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export { Navbar }
