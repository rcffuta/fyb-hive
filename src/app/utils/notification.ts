import { message as Message, notification } from "antd";

export const openNotificationWithIcon = (type: 'success' | 'error', message: string, description: string, notify?:boolean) => {


    if (notify) {

        const handle = type === 'success' ? notification.success : notification.error;
        
        handle({
            message,
            description,
        });

        return
    }

     Message.success(description);
};