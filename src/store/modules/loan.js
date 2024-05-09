import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import LoanService from "@/service/LoanService";
import LoanRequest from "@/model/request/LoanRequest";
import LoanResponse from "@/model/response/LoanResponse";




export const state = {
    loading: false,
    loan: null,
    allLoan: new LoanResponse().readAllLoan,
    readLoanById: new LoanResponse().readLoanById,
    readUserLoan: new LoanResponse().readUserLoan,
};

export const getters = {
    getLoan: (state) => {
        return state.loan;
    },
    getAllLoan: (state) => {
        return state.allLoan;
    },
    getReadLoanById: (state) => {
        return state.readLoanById;
    },
    getReadUserLoan: (state) => {
        return state.readUserLoan;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updateLoan(state, payload){
        state.loan = payload
    },
    updateAllLoan(state, payload){
        state.allLoan = payload
    },
    updateReadLoanById(state, payload){
        state.readLoanById = payload
    },
    updateReadUserLoan(state, payload){
        state.readUserLoan = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    loanCreate({}, payload = new LoanRequest().createLoan){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callCreateLoanApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                // swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.loan.updateLoan, responseData)
                // router.push("/over-view")
                // router.push("/loan-dashboard")
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateLoan({}, payload = new LoanRequest().updateLoan){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callUpdateLoanApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateLoanStatus({}, payload = new LoanRequest().updateLoanStatus){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callUpdateLoanStatusApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deleteLoan({}, payload = new LoanRequest().deleteLoan){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callDeleteLoanApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllLoan({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callReadAllLoanApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.loan.updateAllLoan, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readLoanById({}, payload = new LoanRequest().readLoanById){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callReadLoanByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.loan.updateReadLoanById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readUserLoan({}, payload = new LoanRequest().readUserLoan){
        StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, true)
        return LoanService.callReadUserLoanApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.loan.updateReadUserLoan, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.loan.updateLoading, false)
        })
    },


};