import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {formatViewCount, getRelativeTime} from '../../converter'
import { data } from 'react-router-dom'

export const PlayVideo = ({videoId}) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([])

  const fetchVideoData = async () => {
    //fetching Video data
    const videoUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API}`
    await fetch(videoUrl)
    .then(res => res.json())
    .then(data => {setApiData(data.items[0])
    })
  }
  const fetchOtherData = async () => {
    //fetching channel Data
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${import.meta.env.VITE_YOUTUBE_API}`
    await fetch(channelDataUrl)
    .then(res => res.json())
    .then(data => setChannelData(data.items[0]))

    //fetching comment url
    const commentDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API}`

    await fetch(commentDataUrl)
    .then(res  => res.json())
    .then(data => setCommentData(data.items))
  }

  useEffect(() => {
    fetchVideoData()
  }, [])

  useEffect(() => {
    // fetchOtherData()
    if (apiData && apiData.snippet?.channelId) {
      fetchOtherData();
    }
  }, [apiData])

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData ? apiData.snippet.title :'title' }</h3>
      <div className="play-video-info">
        <p>{formatViewCount(apiData ? apiData.statistics.viewCount : '12')} Views &bull; {getRelativeTime(apiData ? apiData.snippet.publishedAt : 'now')}</p>
        <div>
          <span><img src={like} alt="like" /> {formatViewCount(apiData ? apiData.statistics.likeCount : '54')}</span>
          <span><img src={dislike} alt="dislike" /></span>
          <span><img src={share} alt="share" /> Share</span>
          <span><img src={save} alt="save" /> Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : jack} alt="jack" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : 'Channel Title'}</p>
          <span>{channelData ? formatViewCount(channelData.statistics.subscriberCount) : '1M'} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description'}</p>
        <p>Subscribe {apiData ? apiData.snippet.channelTitle : 'Channel Title'} to watch more</p>
        <hr />
        <h4>{formatViewCount(apiData ? apiData.statistics.commentCount : '24')}</h4>
        {commentData && commentData.map((item, index) => {
          return(
          <div className="comments" key={index}>
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{getRelativeTime(item.snippet.topLevelComment.snippet.publishedAt)}</span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="like" />
                <span>{formatViewCount(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
        )})}

        
      </div>
    </div>
  )
}
