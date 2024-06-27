import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="followersGained" source="followersGained" />
        <TextField label="ID" source="id" />
        <TextField label="likes" source="likes" />
        <TextField label="link" source="link" />
        <TextField label="reach" source="reach" />
        <TextField label="saves" source="saves" />
        <TextField label="shares" source="shares" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="views" source="views" />
        <TextField label="watchTime" source="watchTime" />
      </Datagrid>
    </List>
  );
};
