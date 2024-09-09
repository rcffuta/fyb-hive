import  {  Config,  getFunctions,  getSchemaCreator  }  from  "nobox-client";


const project =  process.env.NEXT_PUBLIC_NOBOX_PROJECT;
const token = process.env.NEXT_PUBLIC_NOBOX_TOKEN;
const uploadApi = process.env.NEXT_PUBLIC_NOBOX_UPLOAD_API;


if (!project) {
    throw new Error('Project not specified')
}

if (!token) {
    throw new Error('Token not specified')
}

if (!uploadApi) {
    throw new Error('uploadApi not specified')
}

export const upload_server_api = uploadApi;
export const config: Config = {
    endpoint:  process.env.NEXT_PUBLIC_NOBOX_API || "https://api.nobox.cloud",
    project, token
};

export const createRowSchema = getSchemaCreator(config, { type: "rowed" });

// export const createKeyGroupSchema = getSchemaCreator(config, { type: "key-group" });

export  const  Nobox  =  getFunctions(config);
