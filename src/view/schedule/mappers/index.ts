import { GroupDataType, InitialDataType, ItemDataType } from "../types";

export const mapToGroup = (data: InitialDataType): GroupDataType => {
  return {
    id: data.user,
    title: data.user,
  };
};

export const mapToActivity = (data: InitialDataType): ItemDataType => {
  return {
    id: Math.random(),
    group: data.user,
    title: `${data.user} Activity`,
    start_time: new Date(data.start).getTime(),
    end_time: new Date(data.end).getTime(),
  };
};
