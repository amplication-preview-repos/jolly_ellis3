import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REEL_TITLE_FIELD } from "./ReelTitle";

export const ReelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Analysis"
          target="reelId"
          label="Analyses"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
