import axios from "axios"
import NoResults from "../components/NoResults"
import VideoCard from "../components/VideoCard"
import Head from 'next/head'
import { Video } from '../types'
import { BASE_URL } from "../utils"

interface IProps {
	videos: Video[]
}

const Home = ({videos}: IProps) => {
	console.log(videos)
	return (
		<>
			<Head>
				<title>LOL Community</title>
				<meta name='description' content='Come share and discuss with our League of Legends Community' />
			</Head>

			<div className="flex flex-col gap-10 videos h-full">
				{videos.length ? (
					videos.map((video: Video) => (
						<VideoCard post={video} key={video._id}/>
					))
				)  : (
					<NoResults text={'No Video'} />
				)}
			</div>
		</>
	)
}

export const getServerSideProps = async ({query: {topic}}: {query: {topic: string}}) => {
	let response = null;
	if(topic){
		response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
	}
	else{
		response = await axios.get(`${BASE_URL}/api/post`)
	}
	
	return {
		props: {
			videos: response.data
		}
	}
}

export default Home