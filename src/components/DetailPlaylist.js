import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function DetailPlaylist() {
    const {id} = useParams()
    const [videos, setVideos] = useState(null)
    // fetch data
    const fetchVideos = async() => {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=AIzaSyBf0bGsYPZVDUq88hxMpa0FJtXIyZTDXLE&maxResults=30`
        const res = await axios.get(url)
        setVideos(res.data.items)
    }
    // set useEffect
    useEffect(() => {
        fetchVideos()
        videos && console.log(videos)
    }, [id])

    return (
        <div className="px-20 py-16">
            <h1 class="text-5xl text-gray-900 mb-8">Detail playlist</h1>

            {
                videos && videos.map(video => {
                    return <Link to={`/video/${video.snippet.resourceId.videoId}`} class="videos mt8 mb-6 flex" key={video.id}>
                    <img src={video.snippet.thumbnails.maxres.url} className="mr-6" alt="" width="200" />
                    <div class="title">
                        <h4 class="text-3xl text-gray-700">{video.snippet.title}</h4>
                        <p className="opacity-70 mt-2 text-blue-600">{video.snippet.channelTitle}</p>
                    </div>
                </Link>
                })
            }
        </div>
    )
}
