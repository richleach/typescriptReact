//useState future value
//Use the type spec with optional "or" ("|") character to start as null but become a different type in the future

import {useState} from 'react' 

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    //const [user, setUser] = useState<AuthUser>({} as AuthUser) another way to do type declaration (using type assertion)
    const handleLogin = () => {
        setUser({
            name: 'Rich',
            email: 'rich@cfsnap.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is: {user?.name}</div>
            <div>User email is: {user?.email}</div>
        </div>
    )
}