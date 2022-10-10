import { useEffect, useState, useRef } from "react";
import { SquaresFour, Trash, Rows, FilePlus } from "phosphor-react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import blogList from "../components/blogList";
import { supabase } from "../supabaseClient";
import BlogImage from "../components/blogImage";
import { useDisclosure, Box } from "@chakra-ui/react";
import SalesManagement from '../components/salesManagement'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import blog from "./blog";

export default function Admin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [captureId, setCaptureId] = useState(null);
  const getBlogs = async function () {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("blogs").select();
      if (error) throw error;
      setBlogs(data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const [tab, setTab] = useState("");

  const removeBlog = async function () {
    try {
      const { error } = await supabase
        .from("blogs")
        .delete()
        .match({ id: captureId });
      console.log(captureId);
      if (error) throw error;
      alert("blog deleted");
    } catch (error) {
      alert(error.message);
    } finally {
      getBlogs();
      onclose();
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="h-full overflow-x-hidden w-screen bg-mainCream">
      <Navbar />

      {tab !== "" && (
        <div className="w-full space-x-5 mt-8 flex h-48 justify-center align-center items-center">
          <button
            onClick={() => {
              setTab("");
            }}
            className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-3xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black"
          >
            back
          </button>
          {tab === "blog" && (
            <Link to="/newblog">
              <button className="lg:px-12 px-5 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 hover:text-gray-600 font-bold text-3xl my-3 bg-white outline-2 outline rounded-full outline-black">
                New Blog
              </button>
            </Link>
          )}
        </div>
      )}

      {tab === "" ? (
        <div className="flex w-screen h-screen flex-col justify-center items-end">
          <div className="flex justify-center align-center flex-col w-screen h-screen">
            <div
              onClick={() => {
                setTab("blog");
              }}
              className="flex flex-col bg-mainBlue cursor-pointer w-full h-full align-center justify-center items-center hover:bg-white   transition-all hover:text-3xl"
            >
              <h2 className="text-2xl lg:text-5xl font-bold">
                Blog Management
              </h2>
            </div>
            <div
              onClick={() => {
                setTab("sales");
              }}
              className="flex flex-col bg-mainWhite w-full h-full cursor-pointer align-center justify-center items-center hover:bg-white   transition-all hover:text-3xl"
            >
              <h2 className="text-2xl  lg:text-5xl font-bold">
                Sales Management
              </h2>
            </div>
          </div>
        </div>
      ) : tab === "sales" ? (
          <SalesManagement />
      ) : tab === "blog" ? (
        <div className="flex flex-col items-center space-y-5 w-full justify-center p-5 capitalize">
          <div className="flex w-full items-center justify-between px-3 bg-CoolGray-900 h-20">
            <input
              className="rounded p-3 w-80"
              placeholder="Search ... "
              type="text"
            />
            <div className="flex p-2">
              <SquaresFour className="bg-mainYellow rounded" size={32} />
              <Rows size={32} />
            </div>
          </div>

          <div className="flex flex-wrap space-x-2  items-center space-y-2 w-full justify-center font-bold text-xl  h-full shadow-2xl rounded">
            {blogs.map((blog) => {
              return (
                <div
                  key={blog.id}
                  className="flex flex-col items-center pb-2  justify-around bg-CoolGray-900 w-full h-full lg:h-1/2 lg:w-1/2 space-y-5 rounded shadow-xl"
                >
                  <BlogImage BlogImage={blog.firstImage} />
                  <h2 className="text-3xl text-mainWhite font-bold">
                    {blog.blogTitle}
                  </h2>
                  <h2 className="text-xl text-mainWhite xs:hidden">
                    {blog.firstInfo}
                  </h2>
                  <div className="flex w-full justify-around">
                    <button
                      onClick={() => {
                        console.log(blog.id);
                      }}
                      className="transition font-bold text-xl  bg-mainWhite text-CoolGray-900 hover:bg-mainCream p-3 rounded"
                    >
                      Edit
                    </button>

                    <Button
                      className="transition font-bold text-xl hover:text-white bg-red-500 text-white hover:bg-gray-600 p-9 rounded"
                      onClick={onOpen}
                    >
                      <Trash
                        onClick={() => {
                          setCaptureId(blog.id);
                        }}
                        className="text-red-500"
                        size={32}
                      />
                    </Button>
                    <Modal
                      className="bg-Cyan-400"
                      finalFocusRef={finalRef}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>delete {blog.blogTitle}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>Are you sure to delete?</ModalBody>

                        <ModalFooter>
                          <Button colorScheme="gray" mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button
                            onClick={() => {
                              removeBlog();
                            }}
                            className="bg-red-500 text-white"
                            variant="ghost"
                          >
                            Yes , DELETE blog.
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
