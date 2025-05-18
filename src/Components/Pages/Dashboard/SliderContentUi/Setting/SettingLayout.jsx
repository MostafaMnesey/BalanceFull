import docImg from "../../../../../assets/images/avatars/calendar-2.svg";

export default function SettingLayout() {
    const data = [
        {
            basicInfo: [
                {
                    headers: [
                        {
                            Name: "Name",
                            Email: "Email Account",
                            Phone: "Phone Number",
                        },
                    ],
                    headerDesc: [
                        {
                            name: "Dr. Ahmed Nabil",
                            email: "Dr. Ahmed Nabil@gmail.com",
                            num: "0123456789",
                            btn: "Edit",
                        },
                    ],
                },
            ],
            proffInfo: [
                {
                    headersProff: [
                        {
                            specialization: "Specialization",
                            medicalLicenseNumber: "Medical License Number",
                            clinicHospitalName: "Clinic / Hospital Name",
                            workAddress: "Work Address",
                            workHours: "Available Working Hours",
                            experinces: "Years of Experience",
                        },
                    ],
                    headersProffDesc: [
                        {
                            specialization: "Addiction",
                            medicalLicenseNumber: "12345678",
                            clinicHospitalName: "Al-Rahma Recovery Clinic",
                            workAddress: "52 El-Nasr Street, Nasr City, Cairo",
                            workHours: "4 Hours",
                            experinces: "6",
                            btn: "Edit",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <section className="min-h-screen bg-white py-10 px-5 md:px-20">
            {/* Profile Image and Header */}
            <div className="flex flex-col items-center gap-3 mb-10">
                <div className="w-44 h-44 rounded-full overflow-hidden">
                    <img
                        src={docImg}
                        alt="Doctor Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h4 className="text-md font-semibold text-gray-800">Dr. Ahmed Nabil</h4>
                <p className="text-gray-600 text-sm">Dr. AhmedNabil@gmail.com</p>
            </div>

            {/* Basic Information */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-sm mb-6">
                <h5 className="text-lg font-semibold text-gray-700 mb-4">
                    Basic Information
                </h5>
                <ul className="space-y-3 w-full">
                    {(() => {
                        const headers = data[0].basicInfo[0].headers[0];
                        const values = data[0].basicInfo[0].headerDesc[0];

                        const fields = [
                            { label: headers.Name, value: values.name },
                            { label: headers.Email, value: values.email },
                            { label: headers.Phone, value: values.num },
                        ];

                        return fields.map((field, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center  p-2"
                            >
                                <span className="font-medium text-base text-gray-700 w-1/3">
                                    {field.label}
                                </span>
                                <span className="text-gray-500 w-1/3 text-sm">{field.value}</span>
                                <button className="text-teal-600 hover:underline text-sm w-1/3 text-right">
                                    {values.btn}
                                </button>
                            </li>
                        ));
                    })()}
                </ul>
            </div>

            {/* Professional Information */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-sm mb-6">
                <h5 className="text-lg font-semibold text-gray-700 mb-4">
                    Professional Information
                </h5>
                <ul className="space-y-3 w-full">
                    {(() => {
                        const headers = data[0].proffInfo[0].headersProff[0];
                        const values = data[0].proffInfo[0].headersProffDesc[0];

                        const fields = [
                            { label: headers.specialization, value: values.specialization },
                            {
                                label: headers.medicalLicenseNumber,
                                value: values.medicalLicenseNumber,
                            },
                            {
                                label: headers.clinicHospitalName,
                                value: values.clinicHospitalName,
                            },
                            { label: headers.workAddress, value: values.workAddress },
                            { label: headers.workHours, value: values.workHours },
                            { label: headers.experinces, value: values.experinces },
                        ];

                        return fields.map((field, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center  p-2"
                            >
                                <span className="font-medium text-base text-gray-700 w-1/3">
                                    {field.label}
                                </span>
                                <span className="text-gray-500 w-1/3 text-sm">{field.value}</span>
                                <button className="text-teal-600 hover:underline text-sm w-1/3 text-right">
                                    {values.btn}
                                </button>
                            </li>
                        ));
                    })()}
                </ul>
            </div>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">
                    Delete account
                </button>
                <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition">
                    Save changes
                </button>
            </div>

        </section>
    );
}
