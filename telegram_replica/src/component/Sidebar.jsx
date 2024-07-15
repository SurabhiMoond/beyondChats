import '../allCssFiles/sideBar.css'
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,} from "@chakra-ui/react";
import {AddIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import VolumeMuteOutlinedIcon from "@mui/icons-material/VolumeMuteOutlined";
import { useTheme } from '../context/ThemeProvider';

export const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="sideBar-main-div">
      <Flex align="center" mb={8} justify="center">
        <Avatar size="md" name="BeyondChat" />
      </Flex>
      <Box ml={4}>
        <Text fontWeight="bold">BeyondChat</Text>
      </Box>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Add Profile
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <AddIcon /> Add account
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button width="100%" justifyContent="flex-start" mb={2}>
        <PeopleOutlineOutlinedIcon />&nbsp; &nbsp; New Group
      </Button>
      <Button width="100%" justifyContent="flex-start" mb={2}>
        <VolumeMuteOutlinedIcon />&nbsp; &nbsp;
        New Channel
      </Button>
      <Button width="100%" justifyContent="flex-start" mb={2}>
        <AccountCircleOutlinedIcon />&nbsp; &nbsp; Contacts
      </Button>
      <Button width="100%" justifyContent="flex-start" mb={2}>
        <CallOutlinedIcon />&nbsp; &nbsp; Calls
      </Button>
      <Button width="100%" justifyContent="flex-start" mb={2}>
        <BookmarkBorderOutlinedIcon />&nbsp; &nbsp;
        Saved Messages
      </Button>
      <Button width="100%" justifyContent="flex-start" mb={2}>
        <SettingsOutlinedIcon />&nbsp; &nbsp; Settings
      </Button>
      <button id="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

