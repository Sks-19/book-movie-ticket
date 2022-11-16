import { Tabs } from "antd";
import TabElement from "./TabElement";
import CinemaHallData from "../database/CinemaHallData";
import { useDispatch, useSelector } from "react-redux";
import { weekDateActions } from "../store/weekDate";
import { useEffect } from "react";

const CinemaHall = () => {
  const dispatch = useDispatch();
  const showlistingData = useSelector((state) => state.weekDate.weekDate);
  let weekDate = [];
  const date = new Date();

  useEffect(() => {
    for (let i = 0; i <= 7; i++) {
      date.setDate(new Date().getDate() + i);
      const dayObj = {
        day: date.toDateString(),
        details: CinemaHallData,
      };
      weekDate = [...weekDate, dayObj];
    }
    dispatch(weekDateActions.setWeekDate(weekDate));
  }, []);

  return (
    <>
      <Tabs defaultActiveKey="1">
        {showlistingData?.map((show, index) => (
          <>
            <Tabs.TabPane
              tab={
                <button
                  className="btn btn-outline-danger p-3"
                  style={{
                    textAlign: "center",
                    color: "#000",
                    margin: "-8px 0px",
                  }}
                >
                  {show.day.slice(0, 3)}
                  <br />
                  {show.day.slice(8, 10)}
                  <br />
                  {show.day.slice(3, 8)}
                </button>
              }
              key={index + 1}
            >
              <TabElement showDate={show.day} CinemaHallData={show.details} />
            </Tabs.TabPane>
          </>
        ))}
      </Tabs>
    </>
  );
};

export default CinemaHall;
