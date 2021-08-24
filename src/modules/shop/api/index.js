import http from "../../../httpCommon";

const getStore = () => {
    return http.get("/galery/get");
};


const setOrder = (data) => {
    return http.post("/order/register", data);
};

const api = {
    getStore,
    setOrder
};
  
export default api;