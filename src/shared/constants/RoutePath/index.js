export default {
    HOME: '/',
    CATALOG: '/catalog',
    AUTH: {
        PREFIX: '/auth',
        LOGIN: function () {
            return `${this.PREFIX}/login`;
        },
        REGISTRATION: function () {
            return `${this.PREFIX}/registration`;
        },
        FORGOT_PASSWORD: function () {
            return `${this.PREFIX}/forgot-password`;
        },
        RESET_PASSWORD: function () {
            return `${this.PREFIX}/reset-password`;
        },
        EMAIL_VERIFICATION: function () {
            return `${this.PREFIX}/email-verification`;
        },
    },
};
