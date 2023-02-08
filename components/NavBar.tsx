import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineLogout } from 'react-icons/hi'
import { GoogleLogin, googleLogout} from '@react-oauth/google'
import { BiSearch } from 'react-icons/bi'
import { RiTeamFill } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'
import Logo from '../utils/logo.png'
import { createOrGetUser } from '../utils'

import useAuthStore from '../store/authStore'

const NavBar = () => {
    const {userProfile}: {userProfile: any} = useAuthStore()
    const {addUser, removeUser} = useAuthStore()
    const router = useRouter()

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e: {preventDefault: () => void}) => {
        e.preventDefault()

        if(searchValue){
            router.push(`/search/${searchValue}`)
        }
    }

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

            <div className='relative hidden md:block'>
                <form
                    onSubmit={handleSearch}
                    className='absolute md:static top-10 -left-20'
                >
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='bg-gray-50 p-3 md:text-md font-medium border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0'
                        placeholder='Search accounts and videos'
                    />
                    <button
                        onClick={handleSearch}
                        className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
                    >
                        <BiSearch />
                    </button>
                </form>
            </div>

            <div>
                {userProfile
                    ? (
                        <div className='flex gap-5 md:gap-10'>
                            {userProfile.image && (
                                <Link href={`/profile/${userProfile._id}`}>
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
                            <Link href="/teamup">
                                <button className='border-2 text-[#0060ff] border-[#397ff0] hover:bg-blue-100 rounded-md px-2 md:px-4 text-md font-semibold flex items-center gap-1'>
                                    <RiTeamFill className='text-xl' />{' '}
                                    <span className='hidden md:block'>Team Up</span>
                                </button>
                            </Link>
                            <Link href="/upload">
                                <button className='border-2 text-[#0060ff] border-[#397ff0] hover:bg-blue-100 rounded-md px-2 md:px-4 text-md font-semibold flex items-center gap-1'>
                                    <IoMdAdd className='text-xl' />{' '}
                                    <span className='hidden md:block'>Upload</span>
                                </button>
                            </Link>
                            <button 
                                type='button'
                                onClick={() => {
                                    googleLogout()
                                    removeUser()
                                }}
                            >
                                <HiOutlineLogout color='0060ff' fontSize={27}/>
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