import { Badge } from "react-bootstrap";
import "./MyBadge.css";

const MyBadge = (props) => {
    return (
        <>
        <Badge variant={props.color} className="mb-5 badge">{props.text}</Badge>
        </>
    )
}

export default MyBadge