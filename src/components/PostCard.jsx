import React from 'react';
import appwriteService from "../appwrite/dataconfig";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-secondaryBg rounded-xl p-4 sm:p-4'>
                <div className='w-full justify-center mb-3 sm:mb-4'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-xl object-cover w-full h-36 sm:h-48'
                    />
                </div>
                <h2 className='text-lg sm:text-xl font-bold text-text line-clamp-2'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;