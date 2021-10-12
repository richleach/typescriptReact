type PersonListProps = {
    //names is an array of 'name' objects, so use the brackets to indicate array
    names: {
        first: string,
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )    
                })}
        </div>
    )
}