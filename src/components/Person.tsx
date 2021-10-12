//You can put all of the types into a file then import when needed, housework that will pay off.
//They will export and import just like components do.

import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
    return (
    <div>
        {props.name.first} {props.name.last}
    </div>
    )
}