import Navbar from "../components/navbar";
import { useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function shoppingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-screen w-screen pt-40 px-10 flex items-center justify-center bg-CoolGray-900">
        <div className=" h-screen w-screen bg-mainWhite">
          <div className=" h-32 w-full bg-mainCream flex justify-around items-center text-2xl">
            <Menu closeOnSelect={false}>
              <MenuButton
                className=" bg-mainWhite "
                minH="48px"
                px={4}
                py={2}
                isLazy={true}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                Brands
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Checkbox size="lg">
                    <span className="text-2xl">Ray-ban (12)</span>
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox size="lg">
                    <span className="text-2xl">Mascot (40)</span>
                  </Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu closeOnSelect={false}>
              <MenuButton
                className=" bg-mainWhite "
                minH="48px"
                px={4}
                py={2}
                isLazy={true}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                Genders
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Checkbox size="lg">
                    <span className="text-2xl">Unisex</span>
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox size="lg">
                    <span className="text-2xl">Women</span>
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox size="lg">
                    <span className="text-2xl">Men</span>
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox size="lg">
                    <span className="text-2xl">Kids</span>
                  </Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
