import axios from "axios";

export async function getResources() {
    try {
        const response = await axios.get("/api/resources");

        return response.data;
    } catch (e) {
        throw new Error(e.response.data.message);
    }
}
