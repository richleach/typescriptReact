//define a custom JS object of type "type", define individual props. 
//These are the string, number and boolean types
type GreetProps = {
    name: string,
    messageCount?: number, // the ? means messageCount is optional
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    //destructure props, saves a few keystrokes
    const {messageCount = 0, isLoggedIn} = props
    return (
        <div>
            {isLoggedIn ? `Welcome ${props.name} you have ${messageCount} messages.` : 'Welcome Guest'}
        </div>
    )
}