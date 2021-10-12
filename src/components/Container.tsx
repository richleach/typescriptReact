//this is good to demo how to pass CSS as props

type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes in here
        </div>
    )
}