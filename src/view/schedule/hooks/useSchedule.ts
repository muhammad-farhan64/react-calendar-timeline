import { useToggle } from "@/view/common/hooks";
import uniqBy from "lodash.uniqby";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import data from "../data/schedule.json";
import { mapToActivity, mapToGroup } from "../mappers";
import { GroupDataType, ItemDataType } from "../types";

export const defaultGroups = [{ id: "0", title: "There are no crew" }];
export const useSchedule = () => {
  const [activities, setActivities] = useState<ItemDataType[]>([]);
  const [groups, setGroups] = useState<GroupDataType[]>(defaultGroups);
  const [filter, setFilter] = useState("");
  const [form, setForm] = useState<{
    user?: string;
    startDate?: Date;
    endDate?: Date;
  }>({
    user: "",
    startDate: undefined,
    endDate: undefined,
  });

  const [openAddSchedule, toggleAddSchedule] = useToggle();

  useEffect(() => {
    const storedGroup = localStorage.getItem("groupSchedule");
    const storedItem = localStorage.getItem("itemSchedule");
    if (storedGroup && storedItem) {
      setActivities(JSON.parse(storedItem));
      setGroups(JSON.parse(storedGroup));
    } else {
      const groupData = uniqBy(
        data.map((group) => mapToGroup(group)),
        "id"
      );
      const activitiesData = data.map((activitiy) => mapToActivity(activitiy));
      localStorage.setItem("groupSchedule", JSON.stringify(groupData));
      localStorage.setItem("itemSchedule", JSON.stringify(activitiesData));
      setActivities(activitiesData);
      setGroups(groupData);
    }
  }, []);

  const onChangeFilter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }, []);

  const onSubmit = () => {
    if (!form.user || !form.startDate || !form.endDate) {
      alert("please fill all form");
      return;
    }

    if (form.endDate <= form.startDate) {
      alert("End date must be greater than start date.");
      return;
    }
    const mapGroupData = mapToGroup({
      user: form.user,
      start: new Date(form.startDate).toString(),
      end: new Date(form.endDate).toString(),
    });
    const mapActivityData = mapToActivity({
      user: form.user,
      start: new Date(form.startDate).toString(),
      end: new Date(form.endDate).toString(),
    });

    const checkUniqGroups = uniqBy([...groups, mapGroupData], "id");

    setGroups(checkUniqGroups);
    setActivities([...activities, mapActivityData]);

    localStorage.setItem("groupSchedule", JSON.stringify(checkUniqGroups));
    localStorage.setItem(
      "itemSchedule",
      JSON.stringify([...activities, mapActivityData])
    );
    setForm({
      user: "",
      startDate: undefined,
      endDate: undefined,
    });
    toggleAddSchedule();
  };
  return {
    activities,
    groups,
    onChangeFilter,
    filter,
    form,
    setForm,
    onSubmit,
    openAddSchedule,
    toggleAddSchedule,
  };
};

export type SchedulelViewModel = ReturnType<typeof useSchedule>;
