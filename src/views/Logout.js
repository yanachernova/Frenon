import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Facebook from '../components/Facebook';
import Google from '../components/Google'


const Logout = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.GetFacebookData()
        actions.GetGoogleData()
    }, [actions])
    return (
        <>
            {/* Side bar */}
            <Sidebar />
            {/* Menu */}
            <Navbar />
            <div className="mt-3">
                {JSON.stringify(store.facebook_name) === "{}" ?
                    (
                        <>
                        <Facebook />
                        </>
                    )
                    :
                    (
                        <>
                            <h1 style={{ marginLeft: "5rem" }}>Bienvenido,</h1>
                            <h3 style={{ marginLeft: "5rem" }}>{store.facebook_name.name}</h3>
                        </>
                    )


                }
                </div>
                <div className="mt-3 ml-5 pl-5">
                {JSON.stringify(store.google_name) === "{}" ?
                    (
                        <>
                        <h1 style={{ marginLeft: "5rem" }}>Bienvenido,</h1>
                            <h3 style={{ marginLeft: "5rem" }}>{store.google_name.name}</h3>
                        </>
                    )
                    :
                    (
                        <>
                        <Google />
                            
                        </>
                    )


                }

            </div>

        </>
    )
}

export default Logout;