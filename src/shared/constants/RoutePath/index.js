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
    },
};
