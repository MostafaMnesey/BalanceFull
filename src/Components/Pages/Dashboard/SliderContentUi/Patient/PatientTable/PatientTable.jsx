import React from 'react'

export default function PatientTable() {
    const tableData = [
        {
            headers: [
                {
                    PatientName: 'Patient Name',
                    AddictionType: 'Addiction Type',
                    Age: 'Age',
                    Gender: 'Gender',
                    Status: 'Status',
                    Action:'Action'
                    
                }
            ]
        },
        {
            tableRow: [
                { name: 'Adam', AddictionType: 'Drugs', Age: '24', Gender: 'Male', status:'Full Recovery'},
                { name: 'Sara', AddictionType: 'Alcohol', Age: '28', Gender: 'Female', status:'Full Recovery'},
                { name: 'Mo', AddictionType: 'Smoking', Age: '32', Gender: 'male', status:'Full Recovery'},
                { name: 'Laila', AddictionType: 'Drugs', Age: '29', Gender: 'Female', status:'Full Recovery'},
                { name: 'Omar', AddictionType: 'Drugs', Age: '35', Gender: 'Male', status:'Partial Recovery'},
                { name: 'Nour', AddictionType: 'Alcohol', Age: '26', Gender: 'Female', status:'Partial Recovery'},
                { name: 'Youssef', AddictionType: 'Smoking', Age: '30', Gender: 'male', status:'Partial Recovery'},
                { name: 'Menna', AddictionType: 'Drugs', Age: '22', Gender: 'Female', status:'Partial Recovery'},
                { name: 'Tamer', AddictionType: 'Smoking', Age: '40', Gender: 'male', status:'Partial Recovery'},
                { name: 'Menna', AddictionType: 'Drugs', Age: '27', Gender: 'Female', status: 'Partial Recovery' },
                { name: 'Zizo', AddictionType: 'Drugs', Age: '24', Gender: 'Male', status: 'Under Treatment' },
                { name: 'Judy', AddictionType: 'Alcohol', Age: '28', Gender: 'Female', status: 'Under Treatment' },
                { name: 'Leo', AddictionType: 'Smoking', Age: '32', Gender: 'male', status: 'Under Treatment' },
                { name: 'Fady', AddictionType: 'Drugs', Age: '29', Gender: 'Female', status: 'Under Treatment' },
            ]
        }
    ]
    return <>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200  dark:text-gray-400">
                    <tr className='text-center'>
                        <th scope="col" className="p-4 ">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        {Object.entries(tableData[0].headers[0]).map(([ value], index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {value}
                            </th>
                        ))}

                        
                    </tr>
                </thead>
                <tbody>
                    {tableData[1].tableRow.map((row, i) => (
                        <tr key={i} className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-table-search-${i}`}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor={`checkbox-table-search-${i}`} className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                                {row.name}
                            </th>
                            <td className="px-6 py-4">{row.AddictionType}</td>
                            <td className="px-6 py-4">{row.Age}</td>
                            <td className="px-6 py-4">{row.Gender}</td>
                            <td
                                className={`px-6 py-4 text-center `}
                            >
                                <span className={` text-xs px-4 py-1 rounded-full 
                                ${row.status === 'Full Recovery' ? 'bg-[#dcfbfa] font-normal text-green-600' : ''}
                                ${row.status === 'Partial Recovery' ? 'bg-[#FCF3D5] font-normal text-[#675A32]' : ''}
                                ${row.status === 'Under Treatment' ? 'bg-red-300 font-normal text-red-600' : ''}

                                    `}>

                                {row.status}
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}

                    
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>


    </>
}
