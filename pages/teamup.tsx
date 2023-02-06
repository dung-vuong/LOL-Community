import React from 'react'
import { IUser } from '../types'

const teamup = () => {
    const teams: string[][] = [
        ["hello", "this", "that", "Anh", "Hkon"],
        ["hello", "this", "that", "Anh", "Hkon"],
        ["hello", "this", "that", "Anh", "Hkon"],
        ["hello", "this", "that", "Anh", "Hkon"],
        ["hello", "this", "that", "Anh", "Hkon"],
        ["hello", "this", "that", "Anh", "Hkon"],
        ["hello", "this", "that", "Anh", "Hkon"],
    ]

    return (
        <div className='flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 bg-[#f3f7fd] justify-center'>
            <div className='bg-white rounded-lg xl:h-[90vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6'>
                <div>
                    <div>
                        <p className='text-xl font-bold'>Others Team</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='text-xl font-bold'>Create Your Own Team</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default teamup