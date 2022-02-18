import React, { createContext, Component } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {
        isLoggedIn: false,
        isAdmin: false
    }

    logout = () => {
        this.setState({
            isLoggedIn: false,
            isAdmin : false
        });
        console.log("logout pressed");
        window.sessionStorage.setItem("token","");
        window.sessionStorage.setItem("admin", false);
    }

    login = () => {
        this.setState({ isLoggedIn: true });
    }

    loginAdmin = () =>{
        this.setState({isAdmin : true});
    }

    componentDidMount() {
        let token = window.sessionStorage.getItem("token");
        let admin = window.sessionStorage.getItem("admin");
        console.log("In mount:" + admin);
        if(token){
            console.log("hello in token");
            if(admin == "true"){ 
                console.log("in if");
                this.setState({isLoggedIn: true, isAdmin: true});
            }
            else{
                this.setState({isLoggedIn: true});
            }
        }
        else{
            this.setState({isLoggedIn: false, isAdmin: false});
        }
    }

    render() {
        console.log("context rerendering");
        return (
            <UserContext.Provider value={{ ...this.state, logout: this.logout, login : this.login, loginAdmin : this.loginAdmin }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;