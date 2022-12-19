import React, { useContext } from 'react'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    return <UserContext.Provider value={{

    }}>
        {
            children
        }
    </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext)
}

export { UserProvider }