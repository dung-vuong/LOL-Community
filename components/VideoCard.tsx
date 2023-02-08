import React, {useState, useEffect, useRef} from 'react'
import { NextPage } from 'next';
import { Video } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi';
import {BsFillPlayFill, BsFillPauseFill, BsPlay} from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

interface IProps {
    post: Video;
}

const VideoCard: NextPage<IProps> = ({post}) => {
    const [isHover, setIsHover] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [isVideoMuted, setIsVideoMuted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const onVideoPress = () => {
        if(playing){
            videoRef?.current?.pause()
            setPlaying(false)
        }
        else{
            videoRef?.current?.play()
            setPlaying(true)
        }
    }

    useEffect(() => {
        if(videoRef?.current){
            videoRef.current.muted = isVideoMuted
        }
    }, [isVideoMuted])

    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='w-8 h-8'>
                        <Link href={`/profile/${post.postedBy?._id}`}><>
                            <Image
                                width={32}
                                height={32}
                                className='rounded-full'
                                src={post.postedBy.image}
                                alt="profile shoot"
                                layout='responsive'
                            />
                        </></Link>
                    </div>
                    <div>
                        <Link href={`/profile/${post.postedBy?._id}`}>
                            <div className='flex items-center gap-2'>
                                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                                    {post.postedBy.userName}{``}
                                    <GoVerified className='text-blue-400 text-md'/>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='lg:ml-20 flex gap-4 relative'>
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className='rounded-3xl'
                >
                    <Link href={`/detail/${post._id}`}>
                        <video
                            loop
                            ref={videoRef}
                            className='lg:w-[750px] lg:h-[530px] md:h-[400px] md:w-[600] h-[300px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
                            src={post.video.asset.url}
                        >

                        </video>
                    </Link>
                    {isHover && (
                        <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px]'>
                            {playing 
                                ? 
                                    (<button onClick={onVideoPress}>
                                        <BsFillPauseFill className='text-black text-2xl lg:text-4xl'/>
                                    </button>)
                                :
                                    (<button onClick={onVideoPress}>
                                        <BsFillPlayFill className='text-black text-2xl lg:text-4xl'/>
                                    </button>)
                            }
                            {isVideoMuted 
                                ? 
                                    (<button onClick={() => setIsVideoMuted(false)}>
                                        <HiVolumeOff className='text-black text-2xl lg:text-4xl'/>
                                    </button>)
                                :
                                    (<button onClick={() => setIsVideoMuted(true)}>
                                        <HiVolumeUp className='text-black text-2xl lg:text-4xl'/>
                                    </button>)
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default VideoCard