import * as types from "./types";

export function createAccount(loginPassword) {
    return {
        type: types.CREATE_ACCOUNT,
        payload: loginPassword
    }
}

export function addPersonalData(personalData) {
    return {
        type: types.ADD_PERSONAL_DATA,
        payload: personalData
    }
}
