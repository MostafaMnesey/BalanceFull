import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    const [patients, setPatients] = useState([]);
    let patientsData = [];
    const rowsPerPage = 13;

    const navigate = useNavigate();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["patients"],
        queryFn: Allpatients,
        refetchOnMount: true,
    });
          patientsData = data?.data?.patients || [];
    console.log(data);

    async function Allpatients() {
        const options = {
            url: "https://beige-wildcat-74200.zap.cloud/api/my_patients",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        return axios.request(options)
    }



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
        
    ];

    const { currentRows, totalPages } = paginate(patients, currentPage, rowsPerPage);

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
                    {patientsData.map((pattient, i) => (
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
                                    className="text-gray-600 font-semibold hover:underline"
                                >
                                    {pattient.fullname}
                                </button>
                            </th>
                            <td className="px-6 py-4">{pattient.addictionType}</td>
                            <td className="px-6 py-4">{pattient.age}</td>
                            <td className="px-6 py-4">{pattient.gender}</td>
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
