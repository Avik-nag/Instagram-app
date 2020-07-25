import React from 'react'

const Profile =()=>{
    return (
        <div style={{maxWidth:"900px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                </div>
                <div>
                    <h4>Test User </h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>99 Posts</h6>
                        <h6>99 Followers</h6>
                        <h6>99 Following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>
                <img className="item" src="https://images.unsplash.com/photo-1583853275454-c8b542c291c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"/>

            </div>
        
        
        </div>
    )
}

export default Profile