import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}posts/3.jpeg`} alt="" className="profileCoverImg" />
                            <img src={`${PF}posts/8.jpeg`} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Jivesh Anand</h4>
                            <span className="profileInfoDesc">Hola Everyone!!!</span>

                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>

                    </div>
                </div>

            </div>
        </>
    )
}
