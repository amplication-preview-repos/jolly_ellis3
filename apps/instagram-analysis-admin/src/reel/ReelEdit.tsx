import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AnalysisTitle } from "../analysis/AnalysisTitle";

export const ReelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="analyses"
          reference="Analysis"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="comments" source="comments" />
        <NumberInput
          step={1}
          label="followersGained"
          source="followersGained"
        />
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="link" source="link" />
        <NumberInput step={1} label="reach" source="reach" />
        <NumberInput step={1} label="saves" source="saves" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="views" source="views" />
        <NumberInput label="watchTime" source="watchTime" />
      </SimpleForm>
    </Edit>
  );
};
