import React from 'react'
import Profilepic from '../assets/images/rome-looking-out-crop.jpg'
import '../css/header.css'
import Helmet from 'react-helmet'

class Header extends React.Component {
    render() {

        return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Rachel Ellyn Gurlin</title>
            <meta name="description" content="Personal Profile for Rachel Gurlin" />
            <meta property="og:site_name" content="Rachel Gurlin" />
            <meta property="og:title" content="Rachel Gurlin" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="#" />
            <meta property="og:description" content="Personal Profile for Rachel Gurlin" />
            <meta property="og:url" content="#" />
            <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="userphoto">
                
                <img className="photo" src={Profilepic} alt=""></img>
                
            </div>
        </>
        )

    }
}

export default Header