import { posts } from "../data/mockActivities";
import ActivityCard from "../components/ActivityCard";
import "./ActivitiesPage.css";


// .map is a loop
function ActivityPage(){
  return(
    <div className = "ActivitiesFeed">
    { // Javascript requires {}
      posts.map((post) => (
        <ActivityCard 
        key={post.id}
        post = {post} 
        />
      ))
    }
    </div>
  )
}

export default ActivityPage