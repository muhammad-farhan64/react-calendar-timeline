import { Button } from "@/view/common/components/ui";
import { add, addDays, startOfDay, subDays } from "date-fns";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";

const groups = [
  { id: 1, title: "group 1" },
  { id: 2, title: "group 2" },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "item 1",
    start_time: new Date(),
    end_time: add(new Date(), { days: 2 }),
  },
  {
    id: 2,
    group: 2,
    title: "item 2",
    start_time: new Date(),
    end_time: add(new Date(), { days: 2 }),
  },
];

export const SchedulePage = () => {
  const startDate = startOfDay(new Date()); // Starting from today at 00:00
  const endDate = addDays(startDate, 31);
  return (
    <div className="m-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Schedule</h1>
        <Button>Add Schedule</Button>
      </div>
      <div className="mt-2">
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={subDays(startDate, 0)}
          defaultTimeEnd={endDate}
          canResize={false}
          canMove={false}
          minZoom={2678400000}
          maxZoom={2678400000}
          timeSteps={{
            second: 0,
            minute: 0,
            hour: 1,
            day: 1,
            month: 1,
            year: 1,
          }}
        />
      </div>
    </div>
  );
};
