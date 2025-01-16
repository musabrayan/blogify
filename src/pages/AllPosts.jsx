import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/dataconfig";
import { Loader2 } from "lucide-react";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                setLoading(false); // Add this to stop loading once posts are fetched
            }
        });
    }, []);

    return (
        <div className='w-full py-8 bg-bg-color text-text-color'>
            <Container>
                {posts.length > 0 ? (
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    loading ? (
                        <div className="flex justify-center items-center">
                            <Loader2 className="w-6 h-6 animate-spin" />
                        </div>
                    ) : (
                        <div className='w-full text-center'>
                            <p className='text-2xl font-bold'>No posts available</p>
                        </div>
                    )
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
