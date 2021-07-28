import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">David Choi</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">David Choi</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">David Choi</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGSmk2SFBTatg/profile-displayphoto-shrink_800_800/0/1600131174930?e=1632960000&v=beta&t=bQdn_tUx8RLN7mkfn9M0FU7zW0OVtGQTzFwHshmodgU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">David Choi</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
