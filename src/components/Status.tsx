//to enforce specific values as your type values, use a pipe delimited list
// aka "union of string literals"

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props:StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    }
    if(props.status === 'success'){
        message = 'Data fetched successfully'
    }
    if(props.status === 'error'){
        message = 'Error fetching data'
    }
    
    
   return (
       <div>
           <h2>{message}</h2>
       </div>
   ) 
}