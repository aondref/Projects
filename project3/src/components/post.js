import { useParams } from "react-router-dom"

export default function Post() {
    let { postId } = useParams();
    return <h2>Blog Post: {postId}</h2>
}