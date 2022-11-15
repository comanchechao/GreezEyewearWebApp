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
    <div className="h-full w-full justify-center items-center flex flex-wrap px-24 text-2xl space-x-20">
      <Editable
        className="bg-mainCream rounded-md"
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
      <Editable
        className="bg-mainCream rounded-md"
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
        className="bg-mainCream rounded-md"
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
        className="bg-mainCream rounded-md"
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
        className="bg-mainCream rounded-md"
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

      <Editable
        className="bg-mainCream rounded-md"
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
    </div>
  );
}
