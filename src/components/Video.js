import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Video() {
    const {videoId} = useParams()
    return (
        <div className="px-20 py-16">
            <h1 class="text-5xl text-gray-900 mb-8">video</h1>

            {
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                frameborder="0" allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"></iframe>
            }
        </div>
    )
}
