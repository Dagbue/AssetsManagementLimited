class LoanRequest {
    createLoan = {
        userId: null,
        amount: null,
        loanPlan: null,
        transactionReference: null,
        loanDepositMethod: null,
        loanAdditionalComment: null,
        loanPrepaymentFee: null,
        loanStatus: null
    };

    updateLoan = {
        loanId: null,
        amount: null,
        loanPlan: null,
        transactionReference: null,
        loanDepositMethod: null,
        loanAdditionalComment: null,
        loanPrepaymentFee: null,
        loanStatus: null
    };

    deleteLoan = {
        loanId: null,
    };

    readLoanById = {
        loanId: null,
    };

    readUserLoan = {
        userId: null,
    };

    updateLoanStatus = {
        loanId: null,
        loanStatus: null,
    };


}

export default LoanRequest;