import uniqBy from "lodash.uniqby";
import { useEffect, useState } from "react";
import data from "../data/schedule.json";
import { mapToActivity, mapToGroup } from "../mappers";
import { GroupDataType, ItemDataType } from "../types";

export const useSchedule = () => {
  const [activities, setActivities] = useState<ItemDataType[]>([]);
  const [groups, setGroups] = useState<GroupDataType[]>([]);

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
  return {
    activities,
    groups,
  };
};

export type SchedulelViewModel = ReturnType<typeof useSchedule>;
