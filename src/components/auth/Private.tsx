import { Login } from "./Login"

//import the proptype from Profile file (you have to export it from the file!)
import { ProfileProps } from "./Profile"

//how to type a component prop (React.ComponentType)
type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component:Component}: PrivateProps) => {
    if(isLoggedIn){
        return <Component name="Rich" />
    } else {
        return <Login />
    }
}