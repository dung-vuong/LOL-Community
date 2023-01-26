import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { GoogleLogin, googleLogout} from '@react-oauth/google'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import Logo from '../utils/logo.png'
import { createOrGetUser } from '../utils'

import useAuthStore from '../store/authStore'

const NavBar = () => {
    const user = false
    const {userProfile}: {userProfile: any} = useAuthStore()
    const {addUser, removeUser} = useAuthStore()


    return (
        <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <div className='flex items-center gap-3 cursor-pointer font-black text-xl text-[#0062ffe4] rounded'>
                <Link href='/'>
                    <div className='md:w-[35px] flex flex-col'>
                        <Image 
                            className='cursor-pointer'
                            src={Logo}
                            alt="tiktik"
                            layout='responsive'
                        />
                    </div>
                </Link>
                <p>LOL Community</p>
            </div>
            <div>
                SEARCH 
            </div>
            <div>
                {userProfile
                    ? (
                        <div className='flex gap-5 md:gap-10'>
                            {userProfile.image && (
                                <Link href='/'>
                                    <>
                                        <div>
                                            <Image
                                                className='rounded-full cursor-pointer'
                                                src={userProfile.image}
                                                alt='user'
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </>
                                </Link>
                            )}
                            <Link href="/upload">
                                <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                                    <IoMdAdd className='text-xl' />{' '}
                                    <span className='hidden md:block'>Upload </span>
                                </button>
                            </Link>
                            <button 
                                type='button'
                                className='border-2 p-2 rounded-full cursor-pointer outline-none'
                                onClick={() => {
                                    googleLogout()
                                    removeUser()
                                }}
                            >
                                <AiOutlineLogout color='0060ff' fontSize={21}/>
                            </button>
                        </div>
                    ) 
                    : (
                        <GoogleLogin
                            onSuccess={(response) => createOrGetUser(response, addUser)}
                            onError={() => console.log("Error")}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default NavBar