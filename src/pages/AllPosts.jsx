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
                setLoading(false);
            }
        });
    }, []);

    return (
        <div className='w-full py-4 sm:py-8 bg-bg-color text-text-color'>
            <Container>
                {posts.length > 0 ? (
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    loading ? (
                        <div className="flex justify-center items-center min-h-[200px]">
                            <Loader2 className="w-6 h-6 animate-spin" />
                        </div>
                    ) : (
                        <div className='w-full text-center py-8'>
                            <p className='text-xl sm:text-2xl font-bold'>No posts available</p>
                        </div>
                    )
                )}
            </Container>
        </div>
    );
}

export default AllPosts;