import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/dataconfig";
import { Container, Button } from "../components";

function Post() {
    const [post, setPost] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();
    
    // Get user data from Redux store
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    // Handle post deletion
    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    // Calculate isAuthor inside the component body
    const isAuthor = Boolean(post?.userId && userData?.$id && post.userId === userData.$id);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg text-text">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg text-text">
            <Container>
                <div className="max-w-3xl mx-auto py-8">
                    <div className="relative mb-6">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full rounded-lg"
                        />
                        
                        {/* Edit and Delete buttons for author */}
                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button 
                                        className="bg-accent-color-green text-white hover:bg-accent-color-brown transition-colors"
                                    >
                                        Edit
                                    </Button>
                                </Link>

                                {!showConfirmation ? (
                                    <Button
                                        className="bg-red-500 text-white hover:bg-red-700 transition-colors"
                                        onClick={() => setShowConfirmation(true)}
                                    >
                                        Delete
                                    </Button>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button
                                            className="bg-red-500 text-white hover:bg-red-700 transition-colors"
                                            onClick={deletePost}
                                        >
                                            Confirm Delete
                                        </Button>
                                        <Button
                                            className="bg-gray-500 text-white hover:bg-gray-700 transition-colors"
                                            onClick={() => setShowConfirmation(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    
                    <div className="prose prose-lg whitespace-pre-wrap">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Post;