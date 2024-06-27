import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ReelTitle } from "../reel/ReelTitle";

export const AnalysisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <TextInput label="editingStyle" multiline source="editingStyle" />
        <TextInput label="effectiveness" multiline source="effectiveness" />
        <TextInput label="hook" multiline source="hook" />
        <ReferenceInput source="reel.id" reference="Reel" label="Reel">
          <SelectInput optionText={ReelTitle} />
        </ReferenceInput>
        <TextInput label="structure" multiline source="structure" />
      </SimpleForm>
    </Create>
  );
};
