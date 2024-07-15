import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Text, useDisclosure } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import "../allCssFiles/chatInterface.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Header } from "./Header";

export const ChatsInterface = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name,setName]=useState("");
  const [selectedChatId, setSelectedChatId] = useState(null);
  const inputRef = useRef(null);

  const handleIconClick = (e) => {
    e.stopPropagation();
    onOpen();
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const fetchMessages = async (chatId) => {
    try {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      const data = response.data;
      if (data.status === "success") {
        setMessages(data.data);
        setName(data.data.creator.name);
      }
    } catch (error) {
      console.error("Fetching messages failed:", error);
    }
  };

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    fetchMessages(chatId);
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats"
        );
        if (res.data.status === "success") {
          setChats(res.data.data.data);
        }
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="chat-interface-main-div">
      <div className="chat-lists">
        <div className="chat-list-iconSearch">
          <HamburgerIcon onClick={handleIconClick}  style={{fontSize:'2rem'}}/>
          <input type="text" placeholder="Search...." style={{padding:'5px'}} />
        </div>

 {chats.map((chat) => (
     <div className="chat-profile-div" key={chat.id} onClick={() => handleChatSelect(chat.id)} >
        <Avatar size="sm" name={chat.creator.name}  src={chat.creator.avatar_url} />
          <div className="chat-info">
            <p className="chat-name">{chat.creator.name}</p>
          </div>
          </div>))}
      </div>
      <div className="chatId-details" onClick={onClose}>
        <Header name={name} />
        <div className="chat-container">
          {messages.length > 0 ? (messages.map((message, index) => (
            <>
            <div key={index} className="message-container">
              <div className={ message.sender.name === "BeyondChat" ? "bot-message" : "user-message" }>
                  <p>{message.message}</p>
              </div>
            </div>
            </>))) : (<p style={{ marginTop: "40%" }}> Start chatting with your Contacts</p>
          )}
        </div>
    <div className="message-input-container">
     <input ref={inputRef} className="message-input" placeholder="Type your message..."/>
     <button className="send-button">Send</button>
    </div>
    </div>
      {isOpen && <Sidebar />}
    </div>
  );
};
