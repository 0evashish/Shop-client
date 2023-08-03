import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_WEBSITE}`;
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQxZWI0ZDExNWQ2YmE2ZjE0NGUyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDQ2OTIwMCwiZXhwIjoxNjkwNzI4NDAwfQ.6RBngQyNzH4w7UHHesqms0vg7wxRKecnSBuHdiGLDHs";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
