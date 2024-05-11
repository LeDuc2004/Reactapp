import { TextInput, Checkbox, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import classes from "./page.module.css";
import "@mantine/dropzone/styles.css";

export default function App() {
  const form = useForm({
    initialValues: {
      image_url: null,
    },

    validate: {
      image_url: (value) => (value ? null : "not file"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Dropzone
        className={classes.root}
        onDrop={(files) => form.setFieldValue("image_url", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...form.getInputProps("image_url")}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-dimmed)",
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Text className={classes.errorText} {...form.getInputProps("image_url")}>
        chose your file, please
      </Text>
      <Button type="submit">submit</Button>
    </form>
  );
}
