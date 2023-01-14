import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function NestedRoute() {
    return <>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div><h1>Nested Route Components</h1></div>

            <div><p>in this component we are going to see the concept of nested routings</p></div>
            <div>
                <ul>
                    <Link to='profile'>
                        <li>
                            <div>
                                <b>Profile</b>
                            </div>
                        </li>
                    </Link>
                    <Link to='account'>
                        <li>
                            <div>
                                <b>Account</b>
                            </div>
                        </li>
                    </Link>
                    <Link to='nested-route-example'>
                        <li>
                            <div>
                                <b>Home of Nested Route</b>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
            <Outlet />
        </div>

    </>

}

export default NestedRoute