import { ViewModelProvider } from "@/providers/ViewModel";
import "react-calendar-timeline/lib/Timeline.css";
import { HeaderSchedule } from "../components/HeaderSchedule";
import { TimelineSchedule } from "../components/TimelineSchedule";
import { useSchedule } from "../hooks";

export const SchedulePage = () => {
  const viewModel = useSchedule();
  return (
    <ViewModelProvider {...viewModel}>
      <div className="m-4">
        <HeaderSchedule />
        <TimelineSchedule />
      </div>
    </ViewModelProvider>
  );
};
