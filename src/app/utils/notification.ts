import { message } from "antd";

export const openNotificationWithIcon = (type: 'success' | 'error', messages: string, description: string) => {


    // const handle = type === 'success' ? notification.success : notification.error;

    
    // handle({
    //     message,
    //     description,
    // });

     message.success(description);
};