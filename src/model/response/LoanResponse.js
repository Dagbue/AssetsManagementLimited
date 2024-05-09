class LoanResponse {
    readAllLoan = {
        responseCode: null,
        responseMessage: null,
        Loans: []
    }

    readLoanById = {
        responseCode: null,
        responseMessage: null,
        deposit: {
            loanId: null,
            userId: null,
            amount: null,
            loanPlan: null,
            transactionReference: null,
            loanDepositMethod: null,
            loanAdditionalComment: null,
            loanPrepaymentFee: null,
            loanStatus: null,
            createdAt: null,
            updatedAt: null
        }
    }


    readUserLoan = {
        responseCode: null,
        responseMessage: null,
        Loans: []
    }


    Loans =  {
        loanId: null,
        userId: null,
        amount: null,
        loanPlan: null,
        transactionReference: null,
        loanDepositMethod: null,
        loanAdditionalComment: null,
        loanPrepaymentFee: null,
        loanStatus: null,
        createdAt: null,
        updatedAt: null
    }

}

export default LoanResponse