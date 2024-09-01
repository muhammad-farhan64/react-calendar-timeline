import { useViewModelContext } from "@/providers/ViewModel";
import {
  Button,
  DatePicker,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
} from "@/view/common/components/ui";
import { Label } from "@/view/common/components/ui/label";
import { SchedulelViewModel } from "../hooks";

type DialogAddScheduleType = {
  isOpen: boolean;
  toggleOpen: () => void;
};
export const DialogAddSchedule = ({
  isOpen,
  toggleOpen,
}: DialogAddScheduleType) => {
  const { form, setForm, onSubmit } = useViewModelContext<SchedulelViewModel>();
  console.log(form);
  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Crew</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div>
            <Input
              placeholder="Add user"
              title="User"
              value={form.user}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  user: e.target.value,
                }));
              }}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label>Start</Label>
              <DatePicker
                date={form.startDate}
                setDate={(date) => {
                  setForm((prev) => ({
                    ...prev,
                    startDate: date,
                  }));
                }}
              />
            </div>
            <div className="flex-1">
              <Label>End</Label>
              <DatePicker
                date={form.endDate}
                setDate={(date) => {
                  setForm((prev) => ({
                    ...prev,
                    endDate: date,
                  }));
                }}
              />
            </div>
          </div>
          <Button className="w-full" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
