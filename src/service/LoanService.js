import client  from "./BaseService";

export default {
    callCreateLoanApi(payload) {
        return client.apiClient.post("create-loan", payload);
    },
    callUpdateLoanApi(payload) {
        return client.apiClient.post("update-loans", payload);
    },
    callDeleteLoanApi(payload){
        return client.apiClient.post("delete-loans",payload)
    },
    callReadLoanByIdApi(payload){
        return client.apiClient.post("read-loans-by-id",payload)
    },
    callReadUserLoanApi(payload){
        return client.apiClient.post("read-user-loans",payload)
    },
    callUpdateLoanStatusApi(payload){
        return client.apiClient.post("update-loan-status",payload)
    },
    callReadAllLoanApi(){
        return client.apiClient.get("all-user-loans", {})
    },
};