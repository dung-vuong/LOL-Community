import React, { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { NextPage } from 'next';

import useAuthStore from '../store/authStore';

interface IProps {
  likes: any;
  flex: string;
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton = ({likes, flex, handleLike, handleDislike}: IProps) => {
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const {userProfile}: any = useAuthStore()

    return (
        <div className={`${flex} gap-6`}>
            <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
                {alreadyLiked ? (
                    <div className='hover:bg-primary rounded-full p-2 md:p-4 text-[#F51997]' onClick={handleDislike} >
                        <MdFavorite className='text-lg md:text-2xl' />
                    </div>
                ) : (
                    <div className='hover:bg-primary rounded-full p-2 md:p-4 ' onClick={handleLike} >
                        <MdFavorite className='text-lg md:text-2xl' />
                    </div>
                )}
                <p className='text-md font-semibold '>{likes?.length || 0}</p>
            </div>
      </div>
    )
}

export default LikeButton