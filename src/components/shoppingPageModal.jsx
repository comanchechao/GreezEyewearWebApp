import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
export default function ShoppingMenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className=" px-16 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-3 text-3xl my-3 bg-mainWhite text-CoolGray-900 rounded-full"
        onClick={onOpen}
      >
        Filters
      </button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <button onClick={onClose}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
