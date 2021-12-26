import React from "react";

export default function Blog(props) {
    const sidebar = (
        <ul style={{float: 'left', height: '100%', borderRight:'1px solid blue'}}>
            {
                props.posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    );

    const content = props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ));

    return (
        <div style={{border: "1px solid red"}}>
            {sidebar}{content}
        </div>
    );
}

