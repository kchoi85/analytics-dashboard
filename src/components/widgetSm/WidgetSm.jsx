import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">David Choi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Admin #2</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
