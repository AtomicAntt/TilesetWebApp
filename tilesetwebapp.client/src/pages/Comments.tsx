import { useState, useEffect } from "react";

interface Comment {
    id: number;
    text: string;
}

function Comments() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");

    async function fetchComments() {
        const res = await fetch("/api/comments");
        if (res.ok) {
            const data = await res.json();
            //console.log(await res.json());
            setComments(data);
        }
        else {
            console.log("Response not okay :(")
        }
    }

    async function addComment() {
        if (!newComment.trim()) return;

        await fetch("/api/comments",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: newComment })
            });
        setNewComment("");
        fetchComments();
    }

    async function deleteComment(id: number) {
        await fetch(`/api/comments/${id}`,
            {
                method: "DELETE"
            });

        fetchComments();
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write comment here!"
            />
            <button onClick={addComment}>Add</button>

            <ul>
                {comments.map((c) => (
                    <li key={c.id}>
                        {c.text}
                        <button onClick={() => deleteComment(c.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;