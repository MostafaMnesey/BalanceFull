import caln2 from '../../../../../assets/images/calendar-2.svg'

export default function SessionTable() {
  const sessions = [
    { name: 'John Doe', time: '10:00 AM', status: 'Completed' },
    { name: 'Jane Smith', time: '10:15 AM', status: 'Completed' },
    { name: 'Joe Brown', time: '10:45 AM', status: 'Completed' },
    { name: 'Sarah Davis', time: '11:00 AM', status: 'Waiting' },
    { name: 'Sarah Davis', time: '11:00 AM', status: 'Waiting' },
    { name: 'Sarah Davis', time: '11:00 AM', status: 'Waiting' },
    { name: 'Sarah Davis', time: '11:00 AM', status: 'Waiting' },
  ];

  const getStatusStyle = (status) => {
    return status === 'Completed'
      ? 'bg-[#D9F4F3] text-[#2DC8C3]'
      : 'bg-[#FEF6D8] text-[#C89F1E]';
  };

  return (
    <div className="w-full  bg-[#F5F5F5] rounded-xl shadow p-4">
      <div className='flex items-center justify-between'>
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Today's sessions</h2>
        <div className="bg-[#daf5f5] w-9 h-9 flex items-center justify-center rounded-md border-2 border-[#4d9d9c]">
          <img src={caln2} alt="" />
        </div>

      </div>
      <div className="overflow-hidden">
        <table className="w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="text-xs text-gray-500">
              <th className="py-2">Patient name</th>
              <th className="py-2">Time</th>
              <th className="py-2">State</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3">{session.name}</td>
                <td className="py-3">{session.time}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      session.status
                    )}`}
                  >
                    {session.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
