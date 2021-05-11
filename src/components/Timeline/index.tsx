import { FC } from "react";

import TimelineItem from "./TimelineItem";
import { ITimelineItem } from "./Timeline.types";

interface TimelineProps {
  items: Array<ITimelineItem>;
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <>
      {items.map((item, key) => (
        <TimelineItem key={key} item={item} />
      ))}
    </>
  );
};

export default Timeline;
