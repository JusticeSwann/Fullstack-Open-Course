const Notification = ({message}) => {
    if (message === null){
        return null
    }

    if (message.error === true){
       return(
        <div className="errorMessage">{message.message}</div>
       )
    }
    if (message.error === false){
        return(
         <div className="successMessage">{message.message}</div>
        )
    }
    return null
}

export default Notification