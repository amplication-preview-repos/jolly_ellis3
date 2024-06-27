import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ReelTitle } from "../reel/ReelTitle";

export const AnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
