import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

export const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 day ago</p>
        <div>
          <span><img src={like} alt="like" /> 125</span>
          <span><img src={dislike} alt="dislike" /> 25</span>
          <span><img src={share} alt="share" /> Share</span>
          <span><img src={save} alt="save" /> Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={jack} alt="jack" />
        <div>
          <p>Greatstack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>Channel that make learn easy</p>
        <p>Subscribe Greatstack to watch more</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="user" />
          <div>
            <h3>Jack Nicholson <span>! day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet quo in magnam ratione est. Placeat deleniti iusto minima cupiditate?</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>

        <div className="comments">
          <img src={user_profile} alt="user" />
          <div>
            <h3>Jack Nicholson <span>! day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet quo in magnam ratione est. Placeat deleniti iusto minima cupiditate?</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>

        <div className="comments">
          <img src={user_profile} alt="user" />
          <div>
            <h3>Jack Nicholson <span>! day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet quo in magnam ratione est. Placeat deleniti iusto minima cupiditate?</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>

        <div className="comments">
          <img src={user_profile} alt="user" />
          <div>
            <h3>Jack Nicholson <span>! day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet quo in magnam ratione est. Placeat deleniti iusto minima cupiditate?</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>

        <div className="comments">
          <img src={user_profile} alt="user" />
          <div>
            <h3>Jack Nicholson <span>! day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet quo in magnam ratione est. Placeat deleniti iusto minima cupiditate?</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>

        <div className="comments">
          <img src={user_profile} alt="user" />
          <div>
            <h3>Jack Nicholson <span>! day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet quo in magnam ratione est. Placeat deleniti iusto minima cupiditate?</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
