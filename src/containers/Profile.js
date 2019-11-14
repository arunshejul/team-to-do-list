import React from 'react';

const Profile = () => {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="column column-40">
                    <img alt="profile" src={require("./../assets/images.jpeg")} className="user" />
                </div>
                <div className="column">
                    <h4 class="vertical">&nbsp; John Martin</h4>
                </div>
            </div>
            <br />
            <div className="row">
                <button className="button-outline">
                    <i class="fa fa-list">&nbsp; Team To-Do List</i>
                </button>
            </div>
        </div>
    )
}

export default Profile;