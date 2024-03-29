import type { AppProps } from 'next/app'
import { useState, useEffect} from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../styles/globals.css'



const App = ({ Component, pageProps }: AppProps) => {
	const [isSSR, setIsSSR] = useState(true)
	useEffect(() => {
		setIsSSR(false)
	}, [])
	if (isSSR) return null

  	return (
		<GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
			<div className='bg-gradient-to-r from-sky-50 to-white'>
			<div className='xl:w-[1300px] m-auto overflow-hidden h-[100vh]'>
				<NavBar/>
				<div className='flex gap-6 md:gap-15'>
					<div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
						<SideBar/>
					</div>
					<div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
						<Component {...pageProps} />
					</div>
				</div>
			</div>

			</div>
		</GoogleOAuthProvider>
	)
}

export default App