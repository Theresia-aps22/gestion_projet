import React from 'react';
import MessageList from '../../components/messageList';
import MessageBox from '../../components/messageBox';

export default function Message() {
    return (
        <div className="content-wrapper" style={{backgroundColor: "white"}}>
            <div className="row">
               <MessageList/>
               <MessageBox/>
            </div>
        </div>
    );
}
