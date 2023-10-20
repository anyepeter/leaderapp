/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getLink } from "../graphql/queries";
import { updateLink } from "../graphql/mutations";
export default function LinkUpdateForm(props) {
  const {
    id: idProp,
    link: linkModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    hashnode: "",
    linkedin: "",
    youtube: "",
  };
  const [hashnode, setHashnode] = React.useState(initialValues.hashnode);
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [youtube, setYoutube] = React.useState(initialValues.youtube);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = linkRecord
      ? { ...initialValues, ...linkRecord }
      : initialValues;
    setHashnode(cleanValues.hashnode);
    setLinkedin(cleanValues.linkedin);
    setYoutube(cleanValues.youtube);
    setErrors({});
  };
  const [linkRecord, setLinkRecord] = React.useState(linkModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getLink.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLink
        : linkModelProp;
      setLinkRecord(record);
    };
    queryData();
  }, [idProp, linkModelProp]);
  React.useEffect(resetStateValues, [linkRecord]);
  const validations = {
    hashnode: [{ type: "Required" }],
    linkedin: [{ type: "Required" }],
    youtube: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          hashnode,
          linkedin,
          youtube: youtube ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateLink.replaceAll("__typename", ""),
            variables: {
              input: {
                id: linkRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LinkUpdateForm")}
      {...rest}
    >
      <TextField
        label="Hashnode"
        isRequired={true}
        isReadOnly={false}
        value={hashnode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hashnode: value,
              linkedin,
              youtube,
            };
            const result = onChange(modelFields);
            value = result?.hashnode ?? value;
          }
          if (errors.hashnode?.hasError) {
            runValidationTasks("hashnode", value);
          }
          setHashnode(value);
        }}
        onBlur={() => runValidationTasks("hashnode", hashnode)}
        errorMessage={errors.hashnode?.errorMessage}
        hasError={errors.hashnode?.hasError}
        {...getOverrideProps(overrides, "hashnode")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={true}
        isReadOnly={false}
        value={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hashnode,
              linkedin: value,
              youtube,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <TextField
        label="Youtube"
        isRequired={false}
        isReadOnly={false}
        value={youtube}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hashnode,
              linkedin,
              youtube: value,
            };
            const result = onChange(modelFields);
            value = result?.youtube ?? value;
          }
          if (errors.youtube?.hasError) {
            runValidationTasks("youtube", value);
          }
          setYoutube(value);
        }}
        onBlur={() => runValidationTasks("youtube", youtube)}
        errorMessage={errors.youtube?.errorMessage}
        hasError={errors.youtube?.hasError}
        {...getOverrideProps(overrides, "youtube")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || linkModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || linkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
