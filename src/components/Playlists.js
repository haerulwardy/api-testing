import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Playlists() {
    // set state
    const [playlist, setPlaylist] = useState(null)

    // set fetch function
    const fetchPlaylist = async() => {
        const url = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&maxResults=1&key=AIzaSyBf0bGsYPZVDUq88hxMpa0FJtXIyZTDXLE'
        const res = await axios.get(url)
        setPlaylist(res.data.items)
    }

    // set useEffect
    useEffect(() => {
        fetchPlaylist()
    }, [])
    return (
        <div className="px-20 py-16">
            <h1 class="text-5xl text-gray-900 mb-8">All playlists</h1>

            {
                playlist && playlist.map(list => {
                    return <Link to={`/playlist/${list.id}`} class="playlists" key={list.id}>
                    <img src={list.snippet.thumbnails.maxres.url} alt="playlist-img" width="300" />
                    <div class="title mt-4">
                        <h3 className="text-gray-700 text-3xl">{list.snippet.title}</h3>
                        <p className="text-gray-500">{list.snippet.publishedAt}</p>
                    </div>
                </Link>
                })
            }
        </div>
    )
}
