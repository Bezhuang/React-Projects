import face1 from "assets/images/face-male-1.jpg";
import face3 from "assets/images/face-male-2.jpg";
import face5 from "assets/images/face-male-3.jpg";

import face2 from "assets/images/face-female-1.jpg";
import face4 from "assets/images/face-female-2.jpg";
import face6 from "assets/images/face-female-3.jpg";

export default [
  {
    id: 1,
    avatarSrc: face4,
    name: "尼采",
    status: "online",
    statusText: "在线",
    time: "刚刚",
    message: "每个不曾起舞的日子，都是对生命的辜负。",
    unreadCount: 1,
    replied: false,
  },
  {
    id: 2,
    avatarSrc: face2,
    name: "纪伯伦",
    status: "offline",
    statusText: "离线",
    time: "上午 10:04",
    message: "善良不是愚蠢，而是良好的教育和道德。 ",
    unreadCount: 8,
    replied: false,
  },
  {
    id: 3,
    avatarSrc: face3,
    name: "纳兰性德",
    status: "offline",
    statusText: "离线",
    time: "上午 9:18",
    message: "人生若只如初见，何事秋风悲画扇。",
    unreadCount: 0,
    replied: true,
  },
  {
    id: 4,
    avatarSrc: face5,
    name: "Bezhuang",
    status: "offline",
    statusText: "离线",
    time: "3小时前",
    message: "出处不详。😜",
    unreadCount: 0,
    replied: true,
  },
  {
    id: 5,
    avatarSrc: face6,
    name: "凯撒",
    status: "online",
    statusText: "在线",
    time: "昨天",
    message: "Veni Vidi Vici",
    unreadCount: 1,
    replied: false,
  },
];
