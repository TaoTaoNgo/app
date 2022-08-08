export const baseUrl = 'http://192.168.0.100:8080';
export const loginUrl = `${baseUrl}/auth/login`;
export const API = 'http://192.168.0.100:8080';
export const IMAGE_HOST = 'http://192.168.0.100:4000/dictionary/';
export const SOCKET_IO_SERVER = 'http://192.168.0.100:8080';
export const REQUEST_TIMEOUT = 2000;
export const MESSAGE = {
    W001: {
        type: 'W',
        message: 'Do you want to delete the selected dictionary？',
    },
    W002: {
        type: 'W',
        message: 'Do you want to delete the selected image？',
    },
    E001: {
        type: 'E',
        message: 'INVALID INPUT FIELD',
    },
    E002: {
        type: 'E',
        message: 'MISSING DICTIONARY NAME',
    },
    C001: {
        type: 'C',
        message: 'GO TO MY DICTIONARY SCREEN？',
    },
    C002: {
        type: 'C',
        message: 'GO TO DICTIONARY SCREEN？',
    },
    C009: {
        type: 'C',
        message: 'YOU WANT TO LEAVE SCREEN？',
    },
    E017: {
        type: 'E',
        message: 'Request error',
    },
    W011: {
        type: 'W',
        message: 'Please update cluster setting value',
    },
};

export const DIC_DELETE_ERROR = 'YOU ARE NOT ALLOWED TO DELETE ITEMS: ';
export const IMG_DOWNLOAD_ERROR = 'YOU ARE NOT ALLOWED TO DOWNLOAD ITEMS: ';
export const DIC_TIME_FORMAT = 'YYYY/MM/DD HH:mm';

export const API_PATH = {
    LOGIN: '/auth/login',
    INDEX: '/index',
    DIC_GET_ALL: '/dictionary',
    DIC_REGISTER: '/dictionary',
    //Image
    IMG_GET_LIST_BY_ID: '/dictionary/{dicid}/img',
    IMG_REGISTER_IMAGE: '/dictionary/{dicid}/img',
    IMG_GET_BY_ID: '/dictionary/{dicid}/img/{imgid}',
    DOWNLOAD_IMAGE: '/dictionary/download/img',
    GET_DATA_IMAGE: '/dictionary/getdata/img',
    DIC_DELETE: '/dictionary/{dicid}',
    EXPORT_DICTIONARY: '/dictionary/download/{dicid}',
    DIC_IMPORT: '/dic/import',
    UPDATE_IMG_INFO: '/dictionary/{dicid}/img/{imgid}',
    IMG_DELETE: '/dictionary/{dicid}/img/{imgid}',
    IMPORT_CSV: '/dictionary/import_csv',
    CMT_GET_INFOR: '/dictionary/{imgid}/like',
    CMT_CHANGE_STATUS_LIKE: '/dictionary/{imgid}/like',
    IMG_GET_TOP: '/dictionary/img/top',
    //My Dictionayry API
    DIC_GET_OF_USER: '/mydictionary/user',
    IMG_GET_MY_LIST_BY_ID: 'mydictionary/{dicid}/img',
    //PERSON
    GET_PERSON: 'dictionary/person',
    REGISTER_NEW_PERSON: 'dictionary/person',
    DELETE_PERSON: '/dictionary/person',
    //Tag of Person
    GET_ALL_TAG_OF_PERSON: '/dictionary/person/image',
    REGISTER_NEW_TAG: '/dictionary/tag',
    DELETE_IMG_IN_TAG: '/dictionary/tag',
    //User
    GET_USER_BY_DIC_ID: '/user',
    GET_USER: '/user',
    USER_UPDATE: '/user/update',
    REGISTER_AVATAR: '/user/avatar',
    //Room chat
    JOIN_ROOM: '/dictionary/room',
    GET_ALL_ROOM: '/dictionary/room',
};

export const LOGIN_SCREEN = {
    EXPIRE_TIME: 24 * 60 * 60 * 7 * 1000,
    MESSAGE_LOGIN_SUCCESS: 'Đăng nhập thành công.',
    MESSAGE_LOGIN_WRONG_USERID_PASSWORD: 'Đăng nhập thất bại',
    MESSAGE_LOGIN_INVALID_USERID_PASSWORD:
        'Tên người dùng và mật khẩu không hợp lệ. Vui lòng thử lại.',
    SUCCESS_COLOR: 'success',
    FAILED_COLOR: 'error',
    WARNING_COLOR: 'warning',
    TOKEN_NAME: '',
};

export const PREVENT_INPUT_CHARACTERS = [
    '\\',
    '/',
    ':',
    '*',
    '?',
    '"',
    '<',
    '>',
    '|',
];
export const SOCKET_IO_EVENT = {
    CSV_UPDATE_ONE: 'CSV_UPDATE_ONE',
    PROC_UPDATE_ONE: 'PROC_UPDATE_ONE',
    PROC_ADD_ONE: 'PROC_ADD_ONE',
};
