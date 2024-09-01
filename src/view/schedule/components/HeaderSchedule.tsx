import { useViewModelContext } from "@/providers/ViewModel";
import { Button } from "@/view/common/components/ui";
import dynamic from "next/dynamic";
import { SchedulelViewModel } from "../hooks";
const DialogAddSchedule = dynamic(
  () => import("./DialogAddSchedule").then((mod) => mod.DialogAddSchedule),
  {
    ssr: false,
  }
);

export const HeaderSchedule = () => {
  const { toggleAddSchedule, openAddSchedule } =
    useViewModelContext<SchedulelViewModel>();
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Schedule</h1>
      <Button onClick={toggleAddSchedule}>Add Schedule</Button>
      {openAddSchedule && (
        <DialogAddSchedule
          isOpen={openAddSchedule}
          toggleOpen={toggleAddSchedule}
        />
      )}
    </div>
  );
};
