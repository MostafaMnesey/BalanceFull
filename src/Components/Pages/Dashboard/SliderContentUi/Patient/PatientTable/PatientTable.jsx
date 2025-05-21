import { useState } from "react";
import { FaRegEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import { FaCirclePlus, FaMinus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function paginate(data, currentPage, rowsPerPage) {
    const totalRows = data.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const currentRows = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return { currentRows, totalPages };
}

export default function PatientTable({ setSelectedPage, setSelectedPatient }) {
    const [eyeVisibles, setEyeVisibles] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 13;

    const navigate = useNavigate();


    const tableData = [
        {
            headers: [
                {
                    PatientName: "Patient Name",
                    AddictionType: "Addiction Type",
                    Age: "Age",
                    Gender: "Gender",
                    Status: "Status",
                    Action: "Action",
                },
            ],
        },
        {
            tableRow: [
                { id: 1, name: "Adam", AddictionType: "Drugs", Age: "24", Gender: "Male", status: "Full Recovery" },
                { id: 2, name: "Sara", AddictionType: "Alcohol", Age: "28", Gender: "Female", status: "Full Recovery" },
                { id: 3, name: "Mo", AddictionType: "Smoking", Age: "32", Gender: "Male", status: "Full Recovery" },
                { id: 4, name: "Laila", AddictionType: "Drugs", Age: "29", Gender: "Female", status: "Full Recovery" },
                { id: 5, name: "Omar", AddictionType: "Drugs", Age: "35", Gender: "Male", status: "Partial Recovery" },
                { id: 6, name: "Nour", AddictionType: "Alcohol", Age: "26", Gender: "Female", status: "Partial Recovery" },
                { id: 7, name: "Youssef", AddictionType: "Smoking", Age: "30", Gender: "Male", status: "Partial Recovery" },
                { id: 8, name: "Menna", AddictionType: "Drugs", Age: "22", Gender: "Female", status: "Partial Recovery" },
                { id: 9, name: "Tamer", AddictionType: "Smoking", Age: "40", Gender: "Male", status: "Partial Recovery" },
                { id: 10, name: "Menna", AddictionType: "Drugs", Age: "27", Gender: "Female", status: "Partial Recovery" },
                { id: 11, name: "Zizo", AddictionType: "Drugs", Age: "24", Gender: "Male", status: "Under Treatment" },
                { id: 12, name: "Judy", AddictionType: "Alcohol", Age: "28", Gender: "Female", status: "Under Treatment" },
                { id: 13, name: "Leo", AddictionType: "Smoking", Age: "32", Gender: "Male", status: "Under Treatment" },
                { id: 14, name: "Fady", AddictionType: "Drugs", Age: "29", Gender: "Female", status: "Under Treatment" },
                { id: 15, name: "Adam", AddictionType: "Drugs", Age: "24", Gender: "Male", status: "Full Recovery" },
                { id: 16, name: "Sara", AddictionType: "Alcohol", Age: "28", Gender: "Female", status: "Full Recovery" },
                { id: 17, name: "Mo", AddictionType: "Smoking", Age: "32", Gender: "Male", status: "Full Recovery" },
                { id: 18, name: "Laila", AddictionType: "Drugs", Age: "29", Gender: "Female", status: "Full Recovery" },
                { id: 19, name: "Omar", AddictionType: "Drugs", Age: "35", Gender: "Male", status: "Partial Recovery" },
                { id: 20, name: "Nour", AddictionType: "Alcohol", Age: "26", Gender: "Female", status: "Partial Recovery" },
                { id: 21, name: "Youssef", AddictionType: "Smoking", Age: "30", Gender: "Male", status: "Partial Recovery" },
                { id: 22, name: "Menna", AddictionType: "Drugs", Age: "22", Gender: "Female", status: "Partial Recovery" },
                { id: 23, name: "Tamer", AddictionType: "Smoking", Age: "40", Gender: "Male", status: "Partial Recovery" },
                { id: 24, name: "Menna", AddictionType: "Drugs", Age: "27", Gender: "Female", status: "Partial Recovery" },
                { id: 25, name: "Zizo", AddictionType: "Drugs", Age: "24", Gender: "Male", status: "Under Treatment" },
                { id: 26, name: "Judy", AddictionType: "Alcohol", Age: "28", Gender: "Female", status: "Under Treatment" },
                { id: 27, name: "Leo", AddictionType: "Smoking", Age: "32", Gender: "Male", status: "Under Treatment" },
                { id: 28, name: "Fady", AddictionType: "Drugs", Age: "29", Gender: "Female", status: "Under Treatment" },
                { id: 29, name: "Adam", AddictionType: "Drugs", Age: "24", Gender: "Male", status: "Full Recovery" },
                { id: 30, name: "Sara", AddictionType: "Alcohol", Age: "28", Gender: "Female", status: "Full Recovery" },
                { id: 31, name: "Mo", AddictionType: "Smoking", Age: "32", Gender: "Male", status: "Full Recovery" },
                { id: 32, name: "Laila", AddictionType: "Drugs", Age: "29", Gender: "Female", status: "Full Recovery" },
                { id: 33, name: "Omar", AddictionType: "Drugs", Age: "35", Gender: "Male", status: "Partial Recovery" },
                { id: 34, name: "Nour", AddictionType: "Alcohol", Age: "26", Gender: "Female", status: "Partial Recovery" },
                { id: 35, name: "Youssef", AddictionType: "Smoking", Age: "30", Gender: "Male", status: "Partial Recovery" },
                { id: 36, name: "Menna", AddictionType: "Drugs", Age: "22", Gender: "Female", status: "Partial Recovery" },
                { id: 37, name: "Tamer", AddictionType: "Smoking", Age: "40", Gender: "Male", status: "Partial Recovery" },
                { id: 38, name: "Menna", AddictionType: "Drugs", Age: "27", Gender: "Female", status: "Partial Recovery" },
                { id: 39, name: "Zizo", AddictionType: "Drugs", Age: "24", Gender: "Male", status: "Under Treatment" },
                { id: 40, name: "Judy", AddictionType: "Alcohol", Age: "28", Gender: "Female", status: "Under Treatment" },
                { id: 41, name: "Leo", AddictionType: "Smoking", Age: "32", Gender: "Male", status: "Under Treatment" },
                { id: 42, name: "Fady", AddictionType: "Drugs", Age: "29", Gender: "Female", status: "Under Treatment" },
            ],
        },
    ];

    const { currentRows, totalPages } = paginate(tableData[1].tableRow, currentPage, rowsPerPage);

    const handleClickEyeRow = (index) => {
        setEyeVisibles((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200  dark:text-gray-400">
                    <tr className="text-center">
                        <th scope="col" className="p-4 ">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="hidden peer" />
                                <label
                                    htmlFor="checkbox-all-search"
                                    className="w-4 h-4 cursor-pointer rounded border border-gray-300 bg-gray-100 flex items-center justify-center
                peer-checked:border-[#40C1BD] peer-checked:text-mainColor peer-checked:border-2"
                                >
                                    <FaMinus />
                                </label>
                            </div>
                        </th>
                        {Object.entries(tableData[0].headers[0]).map(([value], index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((pattient, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b border-gray-200 transition-all hover:bg-gray-200 hover:cursor-pointer text-center"
                        >
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    {pattient.status !== "Under Treatment" && (
                                        <div className="relative flex items-center">
                                            <input id={`checkbox-table-search-${i}`} type="checkbox" className="peer hidden" />
                                            <label
                                                htmlFor={`checkbox-table-search-${i}`}
                                                className="w-4 h-4 cursor-pointer rounded border border-gray-300 bg-gray-100 flex items-center justify-center
                          peer-checked:border-[#40C1BD] peer-checked:bg-[#40C1BD]"
                                            />
                                            <FaCheck className="pointer-events-none absolute left-0 top-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                    )}
                                </div>
                            </td>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800"
                            >
                                <button
                                    onClick={() => {
                                        setSelectedPatient(pattient);
                                        setSelectedPage("patient-profile");
                                      }}
                                    className="text-mainColor font-semibold hover:underline"
                                >
                                    {pattient.name}
                                </button>
                            </th>
                            <td className="px-6 py-4">{pattient.AddictionType}</td>
                            <td className="px-6 py-4">{pattient.Age}</td>
                            <td className="px-6 py-4">{pattient.Gender}</td>
                            <td className={`px-6 py-4 text-center`}>
                                <span
                                    className={`text-xs px-4 py-1 rounded-full
                  ${pattient.status === "Full Recovery" ? "bg-[#dcfbfa] font-normal text-green-600" : ""}
                  ${pattient.status === "Partial Recovery" ? "bg-[#FCF3D5] font-normal text-[#675A32]" : ""}
                  ${pattient.status === "Under Treatment" ? "bg-red-300 font-normal text-red-600" : ""}
                `}
                                >
                                    {pattient.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 flex gap-3 text-base items-center justify-center">
                                <button onClick={() => handleClickEyeRow(i)} className="cursor-pointer">
                                    {eyeVisibles[i] !== false ? <FaRegEye className="text-green-900" /> : <FaEyeSlash />}
                                </button>
                                <FaCirclePlus className="text-green-800" />
                                <GoTrash className="text-red-800" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav className="flex items-center justify-center flex-column flex-wrap md:flex-row pt-4" aria-label="Table navigation">
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-3 mb-4">
                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                            <li key={page}>
                                <button
                                    onClick={() => handlePageChange(page)}
                                    className={`flex items-center justify-center px-3 h-8 rounded-md leading-tight
                    ${currentPage === page
                                            ? "bg-mainColor text-gray-100"
                                            : "text-gray-500 bg-gray-100 hover:bg-mainColor hover:text-gray-100"
                                        }
                  `}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
