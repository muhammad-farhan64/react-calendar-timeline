import { Button } from "@/view/common/components/ui";

export const HeaderSchedule = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Schedule</h1>
      <Button>Add Schedule</Button>
    </div>
  );
};
