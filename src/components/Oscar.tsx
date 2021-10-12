//How to type React 'children'
//children is 'React.ReactNode' - you'll see this a lot, don't forget!
type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <h2>{props.children}</h2>
}