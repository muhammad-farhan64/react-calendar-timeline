import { useViewModelContext } from "@/providers/ViewModel";
import { Input } from "@/view/common/components/ui";
import { addDays, startOfDay, subDays } from "date-fns";
import Timeline, {
  DateHeader,
  SidebarHeader,
  TimelineHeaders,
} from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import { defaultGroups, SchedulelViewModel } from "../hooks";

const startDate = startOfDay(new Date()); // Starting from today at 00:00
const endDate = addDays(startDate, 31);

export const TimelineSchedule = () => {
  const { groups, activities, filter, onChangeFilter } =
    useViewModelContext<SchedulelViewModel>();

  const groupFilter = groups.filter((group) =>
    group.title.toLowerCase().includes(filter)
  );
  return (
    <div className="mt-2">
      <Input
        placeholder="Search"
        value={filter}
        onChange={onChangeFilter}
        className="mb-4"
      />
      <Timeline
        groups={groupFilter.length === 0 ? defaultGroups : groupFilter}
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
                <div
                  {...getRootProps()}
                  className="bg-[#0b7474] p-2 text-center text-white"
                >
                  On Board Crew
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
