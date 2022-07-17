import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from "../../../src/assets/image/kmtec_logo.jpeg";

function WhatsappChat() {
    return (
        <div>
            <WhatsAppWidget
			phoneNo="+447480526244"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={5000}
			messageBox={false}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="46"
			iconColor="var(--color-white)"
			iconBgColor="var(--color-primary)"
			headerIcon={logo}
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="black"
			headerTitle="KmTec Ltd UK"
			headerCaption="Online"
			bodyBgColor="white"
			chatPersonName="Support"
			chatMessage={<>Cheers from London(+447480526244) 👋 <br /><br /> How can I help you?</>}
			footerBgColor="black"
			btnBgColor="var(--color-purple)"
			btnTxtColor="var(--color-white)"
		/>
        </div>
    )
}

export default WhatsappChat
