import React, {Component} from "react";
import UserWallet from "./UserWallet";
import AdminWallet from "./AdminWallet";

class UserAdminWallet extends Component {
    render(){
        return(
            <div className="bg-white mt-10 p-10 shadow-2xl w-fit mx-auto">
                <UserWallet />
                <AdminWallet />
            </div>
        );
    }
}

export default UserAdminWallet;