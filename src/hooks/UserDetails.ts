import React from "react";

const UserDetails = (username) => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ userDetails, setUserDetails ] = React.useState<any>([]);

    React.useEffect(() => {
        fetchUserDetails()
    }, [])

    const fetchUserDetails = () => {
        const allUsers = JSON.parse(localStorage.getItem("allUsers") || '[]');
        const user = allUsers.filter((item : any) => item.username === username);        
        setUserDetails(user[0]);
        setIsLoading(false)
    }



    return {
        userDetails,
        isLoading
    }
}

export default UserDetails;