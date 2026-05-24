import type { ActivityPost } from "../types/activity"
import "./ActivityCard.css"

type ActivityCardProp = {
  post: ActivityPost
}

function ActivityCard({ post }: ActivityCardProp) {
  return (
    <div className="postCardContainer">
      <div className="leftSideBarActivtyCard">
        <div className="creatorProfilePictureContainer">
          <img
            className="creatorProfilePicture"
            src={post.creatorProfileImageUrl}
            //alt={`${post.creatorName}'s profile`}
          />
        </div>
      </div>

      <div className="mainActivityCard">
        <div className="postCardHeader">
          <div className="creatorName">{post.creatorName}</div>

          <div className="creatorUserName">
            @{post.creatorUserName}
          </div>

          <div className="timePosted">· {post.createdAt}</div>

          <div className="dotdotdot">...</div>
        </div>

        <div className="postCardActivityInfo">
          <div className="postActivityTitle">{post.title}</div>

          <div className="dateTimeLocation">
            {post.date}, {post.time}, @{post.location}
          </div>
        </div>

        <div className="postCardDescription">
          {post.description}
        </div>

        <div className="postCardActions">
          <div className="chatIconContainer">
            <span className="chatIcon">💬</span>
          </div>

          <div className="chatNumber">· {post.commentCount}</div>

          <div className="postCardActionsRight">
            <div className="attendees">
              {post.attendeeCount} attendees
            </div>

            <button className="joinButton">
              {post.joinedByMe ? "JOINED" : "JOIN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard