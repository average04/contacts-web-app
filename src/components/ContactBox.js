import "../styles/ContactBox.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactCard from "./ContactCard";

import { getContacts, createContacts } from "../slice/contactApiSlice";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { contacts, isLoading, isCreating } = useSelector(
    (state) => state.contact
  );
  const [showAdd, SetShowAdd] = useState(true);
  const dispatch = useDispatch();

  const handleDone = () => {
    // createContacts(body);
    SetShowAdd(false);
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  const renderContactCard = () => {
    return isLoading ? (
      <div>
        <Box sx={{ width: 200 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ width: 200 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ width: 200 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </div>
    ) : (
      <div style={{ marginTop: "130pt" }}>
        <AnimatePresence>
          {contacts.map((contact, i) => (
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ x: "30%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={variants}
            >
              <ContactCard
                key={`cc-${i}`}
                Contact={contact}
                Mode="show"
                Event={handleDone}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <div className="cb-container">
        <div className="cb-box">
          <div className="cb-header">
            <AnimatePresence>
              <motion.div
                onClick={() => SetShowAdd(!showAdd)}
                whileTap={{ scale: 0.9 }}
              >
                <div style={{ width: "100%" }}>
                  {isCreating ? (
                    "Creating..."
                  ) : (
                    <AddCircleOutlineIcon className="cb-add-icon" />
                  )}
                </div>
              </motion.div>

              {showAdd ? (
                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                    },
                  }}
                  exit={{ x: "30%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ContactCard
                    Contact={{ name: "", numbers: ["+63"] }}
                    Mode="add"
                  />
                </motion.div>
              ) : (
                <></>
              )}
            </AnimatePresence>
            <div>
              <SearchIcon className="cb-search-icon" />
            </div>
          </div>
          {renderContactCard()}
        </div>
      </div>
    </>
  );
};
export default Header;
