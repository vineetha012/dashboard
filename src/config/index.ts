export const config = () => {
    let emailValidator: any;
    let BASE_URL: any;

    BASE_URL = process.env.REACT_APP_API_URL;

    return {
        BASE_URL,
        emailValidator,
    };
};
