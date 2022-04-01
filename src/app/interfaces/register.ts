export interface checkMobile {
    CountryId: string,
    UserName: string
}
export interface checkOtp {
    CountryId: string,
    UserName: string,
    OTPCode: string
}
export interface registerUser {
    UserName: string,
    Password: string,
    RoleType: number,
    OTPCode: string
}