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

  const onChangeFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    },
    [] // Empty dependency array means this callback will not change
  );
  return {
    activities,
    groups,
    onChangeFilter,
    filter,
  };
};

export type SchedulelViewModel = ReturnType<typeof useSchedule>;
