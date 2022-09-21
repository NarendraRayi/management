export interface Students {
    name: string;
    gender: string;
    mobile: string;
    email: string;
    batch: string;
    address: {
        city: string;
        mandal: '';
        district: '';
        state: string;
        pincode: string;
    },
    education: [
        { qualification: string, year: number, percentage: number },
        { qualification: string, year: number, percentage: number },
        {qualification: string, year: number, percentage: number }
    ],
    company: {
        name: '';
        location: '';
        package: '';
        offerDate: '';
    },
    sourceType: string;
}
