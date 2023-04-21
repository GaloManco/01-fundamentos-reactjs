export const Post = (props) => {


    return(
        <>
            <p> <strong>{props.author}</strong></p>
            <p>{props.content}</p>
        </>
    )
}