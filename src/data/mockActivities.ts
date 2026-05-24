import type {ActivityPost} from "../types/activity"

export const posts: ActivityPost[] = [
  {
    creatorName: "Richard Wei",
    creatorUserName: "Richardwei127",
    creatorProfileImageUrl: "/src/images/mypfp.jpg",
    id: "1",
    title: "Leg Day",
    date: "5/12/2026",
    time: "9pm",
    location: "RPI Mueller Center",
    category: "gym",
    description: "Anyone want to hit legs today?",
    tags: ["gym", "intense"],
    createdAt: "5/12/2026 : 12:16 PM",

    attendeeCount: 2,
    commentCount: 0,
    joinedByMe: true,

  },
  {
    creatorName: "Mikeal Santiago",
    creatorUserName: "Megalink",
    creatorProfileImageUrl: "9876",
    id: "2",
    title: "BasketBall",
    date: "5/13/2026",
    time: "7pm",
    location: "86 Gym",
    category: "gym",
    description: "I'm down to ball later tonight",
    tags: ["gym"],
    createdAt: "5/12/2026 : 12:18 PM",

    attendeeCount: 1,
    commentCount: 2,
    joinedByMe: false,

  },

]