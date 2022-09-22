export interface Students {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
    gender: string;
    mobile: number;
    email: string;
    batch: string;
    address: {
        city: string,
        mandal: string,
        district: string,
        state: string,
        pincode: null
    };
    educations: [
        { qualification: string, year: number, percentage: number },
        { qualification: string, year: number, percentage: number}],
    company: {
        companyname: string,
        location: string,
        package: number,
        offerDate: string
    };
    sourcetype: string;
    direct: string;
    referalname: string;
    source: string;
}
