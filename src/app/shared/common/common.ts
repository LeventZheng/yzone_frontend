
export const COMMON = {
    API_aURL: 'http://192.168.1.4:8080/yzone',
    API_URL: 'http://192.168.1.4:8080/yzone/rest',
    clone(data) {
        return JSON.parse(JSON.stringify(data))
    },
    getBody(data) {
        return JSON.parse(COMMON.clone(data)._body);
    }
}
