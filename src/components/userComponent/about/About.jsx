import React from 'react';
import './about.css';
import chat from "../../../assest/chat.png"
import edit from "../../../assest/edit.png"
import suprice from "../../../assest/suprice.png"

const about = () => {
  return (
    <div className='about'>
        <div className='about_title'>
            <h1>Giving you personal access to an experienced photographer</h1>
            <div className='about_info_container'>
              <div className='about_info_container_chat'>
                <div className='about_info_container_chatimage'>
                <img src={chat} alt="chat" />
                </div>
                <h3>Chat before the shoot</h3>
                <p>We put you in direct contact
                with your photographer so 
                you can have a helpful conversation
                ahead of the shoot. Discuss
                ideas, define your vision, and
                find out how to prepare.</p>
              </div>
              <div className='about_info_container_editing'>
              <div className='about_info_container_editimage'>
                <img src={edit} alt="chat" />
                </div>
                <h3>Chat before the shoot</h3>
                <p>We put you in direct contact
                with your photographer so 
                you can have a helpful conversation
                ahead of the shoot. Discuss
                ideas, define your vision, and
                find out how to prepare.</p>
              </div>
              <div className='about_info_container_suprice'>
              <div className='about_info_container_supriceimage'>
                <img src={suprice} alt="chat" />
                </div>
                <h3>Chat before the shoot</h3>
                <p>We put you in direct contact
                with your photographer so 
                you can have a helpful conversation
                ahead of the shoot. Discuss
                ideas, define your vision, and
                find out how to prepare.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default about
