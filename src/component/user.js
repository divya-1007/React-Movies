import {useParams} from "react-router"

function User (){
    const params = useParams();
    const {name} = params;
    console.warn(name)
    return(
        <div>
            <h1>This is {name} ...</h1>
        </div>
    )
}
export default User;