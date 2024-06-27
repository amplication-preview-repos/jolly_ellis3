import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { REEL_TITLE_FIELD } from "../reel/ReelTitle";

export const AnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
