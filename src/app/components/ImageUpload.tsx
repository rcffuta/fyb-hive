import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import Image from 'next/image';
import { FormElement } from './Form/form.interface';
import { upload_server_api } from '@/lib/nobox/config';
import axios, { AxiosProgressEvent } from 'axios';
import { readLocalStorage } from '../utils/store-utils';
import { UPLOAD_TOKEN } from '../constants';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


interface UplodProps extends FormElement {
    name: string;
    label?: string;
}


const ImageUpload: React.FC<UplodProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();


    
    
    function revealError() {
        // const errorMessage = props.error ? props.error[props.name] : null;

        if (!props.error) return;

        if (!props.error[props.name]) return;

        message.error(props.error[props.name]);
    }

    const upload = async (options: any) => {
        const { onSuccess, onError, file, onProgress } = options;

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);

        try {
            
            if (!file) {
                throw new Error("No File to upload");
            }

            const response = await axios.post(`${upload_server_api}/files/upload`,
                formData, {
                headers: {                    
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${readLocalStorage(UPLOAD_TOKEN)}`
                },
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    const val = (progressEvent.loaded / (progressEvent.total || progressEvent.loaded));
                    const percent = Math.floor( val * 100);
                    onProgress({ percent });
                },
            });

            const data: any = response.data.data;
            onSuccess(data);

            setImageUrl(()=>data);

            // console.log(data);
            props.onChange(props.name, data);

            // toast.success(`${file.name} file uploaded successfully`);
            setLoading(false);
            message.success(`Uploaded your picture.`);
        } catch (error) {
            onError(error);
            console.error(error); // ! Disable in production
            // toast.error(`${file.name} file upload failed.`);
            message.error(`Failed to upload your picture.`);

            setLoading(false);
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>
                {props.label || 'Upload'}
            </div>
        </button>
    );


    return (
        <Upload
            name={props.name}
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"        
            beforeUpload={beforeUpload}
            // onChange={handleChange}
            customRequest={upload}
        >
            {imageUrl ? <Image src={imageUrl} alt="avatar" style={{ width: '100%' }} width={100} height={100}/> : uploadButton}
            {
                <>
                    {revealError()}
                </>
        }
        </Upload>
    );
};

export default ImageUpload;