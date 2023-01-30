import React, { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { FcComments } from 'react-icons/fc';
import { NextPage } from 'next';

import useAuthStore from '../store/authStore';

interface IProps {
    comments: any[];
    likes: any[];
    handleLike: () => void;
    handleDislike: () => void;
}

const LikeButton = ({comments, likes, handleLike, handleDislike}: IProps) => {
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const {userProfile}: any = useAuthStore()
    const filtedLikes = likes?.filter((item) => item._ref === userProfile?._id)

    useEffect(() => {
        if(filtedLikes?.length > 0){
            setAlreadyLiked(true)
        }
        else{
            setAlreadyLiked(false)
        }
    }, [filtedLikes, likes, comments])

    return (
        <div className='flex gap-6'>
            <div className='mt-4 flex justify-center items-center cursor-pointer'>
                {alreadyLiked ? (
                    <>
                        <div className='hover:bg-primary rounded-full p-3 text-[#F51997]' onClick={handleDislike} >
                            <MdFavorite className='text-lg md:text-5xl' />
                        </div>
                        <p className='text-md font-semibold absolute'>{likes?.length || 0}</p>
                    </>
                ) : (
                    <>
                        <div className='hover:bg-primary rounded-full p-3' onClick={handleLike} >
                            <MdFavorite className='text-lg md:text-5xl' />
                        </div>
                        <p className='text-md font-semibold absolute text-white'>{likes?.length || 0}</p>
                    </>
                )}
            </div>
                
            <div className='mt-4 flex justify-center items-center cursor-pointer'>
                <div className='hover:bg-primary rounded-full p-3'>
                    <FcComments className='text-lg md:text-5xl' />
                </div>
                <p className='text-md font-semibold absolute text-black'>{comments?.length || 0}</p>   
            </div> 
      </div>
    )
}

export default LikeButton