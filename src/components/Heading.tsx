type HeadingProps = {
    children: string
}

export const Heading = (props:HeadingProps) => {
    const {children} = props
    return <>{props.children}</>
}