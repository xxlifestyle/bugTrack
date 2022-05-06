import axios from "axios";

export default async function bugTracking(detail){
    axios.post('http://localhost:3001/api/errors',
        {
            detail: detail,
            title: document.title,
            route: document.location.href,
            time:new Date()
        })
}