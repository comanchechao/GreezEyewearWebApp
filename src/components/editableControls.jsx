import {
  EditablePreview,
  Box,
  useColorModeValue,
  IconButton,
  Input,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function EditableControls() {
  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <div className="h-full w-full justify-center flex px-24 text-2xl space-x-20">
      <div>
        <Editable
          defaultValue="ایمیل"
          isPreviewFocusable={true}
          selectAllOnFocus={false}
        >
          <Tooltip label="برای ادیت کلیک کنید">
            <EditablePreview
              py={2}
              px={4}
              _hover={{
                background: useColorModeValue("gray.100", "gray.700"),
              }}
            />
          </Tooltip>
          <Input py={2} px={4} as={EditableInput} />
          <EditableControls />
        </Editable>
      </div>
      <Editable
        defaultValue="اسم کامل"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
      >
        <Tooltip label="برای ادیت کلیک کنید">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
      <Editable
        defaultValue="کشور"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
      >
        <Tooltip label="برای ادیت کلیک کنید">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
      <Editable
        defaultValue="آدرس"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
      >
        <Tooltip label="برای ادیت کلیک کنید">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
      <Editable
        defaultValue="شهر"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
      >
        <Tooltip label="برای ادیت کلیک کنید">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
      <Editable
        defaultValue="شماره تلفن"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
      >
        <Tooltip label="برای ادیت کلیک کنید">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
    </div>
  );
}
