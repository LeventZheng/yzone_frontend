
export const COMMON = {
    API_URL: 'http://localhost:8080/yzone',
    API_REST: 'http://localhost:8080/yzone/rest',
    clone(data) {
        return JSON.parse(JSON.stringify(data))
    },
    getBody(data) {
        return JSON.parse(COMMON.clone(data)._body);
    }
}
