export type InitialDataType = {
  user: string;
  start: string;
  end: string;
};

export type GroupDataType = {
  id: string;
  title: string;
};

export type ItemDataType = {
  id: number;
  group: string;
  title: string;
  start_time: number;
  end_time: number;
};
