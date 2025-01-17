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

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

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
                <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="relative mb-6">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full rounded-lg object-cover h-48 sm:h-64 md:h-96"
                        />
                        
                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex flex-col sm:flex-row gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button 
                                        className="bg-accent-color-green text-white hover:bg-accent-color-brown transition-colors w-full sm:w-auto"
                                    >
                                        Edit
                                    </Button>
                                </Link>

                                {!showConfirmation ? (
                                    <Button
                                        className="bg-red-500 text-white hover:bg-red-700 transition-colors w-full sm:w-auto"
                                        onClick={() => setShowConfirmation(true)}
                                    >
                                        Delete
                                    </Button>
                                ) : (
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Button
                                            className="bg-red-500 text-white hover:bg-red-700 transition-colors w-full sm:w-auto"
                                            onClick={deletePost}
                                        >
                                            Confirm Delete
                                        </Button>
                                        <Button
                                            className="bg-gray-500 text-white hover:bg-gray-700 transition-colors w-full sm:w-auto"
                                            onClick={() => setShowConfirmation(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
                    
                    <div className="prose prose-sm sm:prose-lg max-w-none whitespace-pre-wrap">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Post;