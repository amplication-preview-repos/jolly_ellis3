import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REEL_TITLE_FIELD } from "../reel/ReelTitle";

export const AnalysisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Analyses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="editingStyle" source="editingStyle" />
        <TextField label="effectiveness" source="effectiveness" />
        <TextField label="hook" source="hook" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Reel" source="reel.id" reference="Reel">
          <TextField source={REEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="structure" source="structure" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
