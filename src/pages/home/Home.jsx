import Charts from "../../components/charts/Charts.jsx";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo.jsx";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx";
import WidgetLg from "../../components/widgetLg/WidgetLg.jsx";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
