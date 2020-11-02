/* eslint-disable indent */
export default class Config {
    host = process.env.HOST;

    token = process.env.TOKEN;

    constructor() {
        if (!this.host) {
            throw new Error('Host not provided');
        }

        if (!this.token) {
            throw new Error('Token not provided');
        }
    }
}
/* eslint-enable indent */
