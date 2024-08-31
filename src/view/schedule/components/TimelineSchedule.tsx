import { useViewModelContext } from "@/providers/ViewModel";
import { Input } from "@/view/common/components/ui";
import { add, addDays, startOfDay, subDays } from "date-fns";
import Timeline, {
  DateHeader,
  SidebarHeader,
  TimelineHeaders,
} from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import { SchedulelViewModel } from "../hooks";

const startDate = startOfDay(new Date()); // Starting from today at 00:00
const endDate = addDays(startDate, 31);

const groups2 = [
  { id: 1, title: "group 1" },
  { id: 2, title: "group 2" },
];

const items2 = [
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

export const TimelineSchedule = () => {
  const { groups, activities } = useViewModelContext<SchedulelViewModel>();
  return (
    <div className="mt-2">
      <Timeline
        groups={groups}
        items={activities}
        defaultTimeStart={subDays(startDate, 0)}
        defaultTimeEnd={endDate}
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
        sidebarWidth={200}
      >
        <TimelineHeaders>
          <SidebarHeader>
            {({ getRootProps }) => {
              return (
                <div {...getRootProps()} className="bg-[#0b7474] p-2">
                  <Input placeholder="Search" />
                </div>
              );
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" className="bg-[#0b7474]" />
          <DateHeader />
        </TimelineHeaders>
      </Timeline>
    </div>
  );
};
