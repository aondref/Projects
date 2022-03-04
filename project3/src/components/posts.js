import { Link } from "react-router-dom"

let blogPosts = [
    {
        id: 1,
        date: "March 7, 2022",
        title: "Getting Started",
        image: "/images/photo-1566837945700-30057527ade0-blogpost1-1.jpeg",
        snippet: "My First React Blog!!! My First Blog Post!!! Excited and elated that I finished the",
        author: "Aondre",
        body: "This is my first post",
    },
    {
        id: 2,
        date: "March 8, 2022",
        title: "Already Started",
        image: "/images/photo-1518563259479-d003c05a6507-blogpost2-1.jpeg",
        snippet: "My Second Blog Post!!!",
        author: "Aondre",
        body: "This is my second post",
    },
    {
        id: 3,
        date: "March 9, 2022",
        title: "Past Started",
        image: "images/photo-1549415697-8e9a0872f910-blogpost3-1.jpeg",
        snippet: "My Third Blog Post!!!",
        author: "Aondre",
        body: "This is my third post",
    },
]

export default function PassObj() {
    return (
        <div className="container-fluid">
            {/* <SuperHeroComponent {...superHeroObj} /> */}
            <BlogPost />
        </div>
    )
}

const BlogPost = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <div className="card-content">
                        <div className="card-overlay"></div>
                        <img src="images/photo-1549415697-8e9a0872f910-blogpost3-1.jpeg" className="card-img-top" alt="third-blog-post" />
                        <Link to={`/blog/posts/journey-so-far`}>
                            <div className="card-details fadeIn-bottom">
                                <span className="border-fun">
                                    <p className="border-effect">Read More</p>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Journey So Far</h5>
                        <p className="card-text">3 people, who never met, all told me about a program called Per Scholas over the course of
                        5 years. They each suggested I start a career in tech. A coincidence or a sign?</p>
                    </div>
                    <div className="col card-footer text-white bg-primary">
                        <div className="d-flex justify-content-between">
                            <p className="m-0">March 9, 2022</p>
                            <p className="m-0">By, Aondre</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                getPosts.sort((a, b) => {
                    return b.id - a.id;
                }).map((post) => (
                    <div className="col" key={post.id}>
                        <div className="card h-100">
                            <div className="card-content">
                                <div className="card-overlay"></div>
                                <img src={post.image} className="card-img-top" alt={post.title} />
                                <Link to={`/blog/posts/${post.title}`}>
                                    <div className="card-details fadeIn-bottom">
                                        <span className="border-fun">
                                            <p className="border-effct">Read More</p>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.snippet}</p>
                            </div>
                            <div className="col card-footer text-white bg-primary">
                                <div className="d-flex justify-content-between">
                                    <p className="m-0">{post.date}</p>
                                    <p className="m-0">By, {post.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            } */}
        </div>
    )
}