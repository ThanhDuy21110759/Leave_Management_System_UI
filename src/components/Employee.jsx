import React, { useState } from 'react';
import axios from 'axios';

const Employee = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleNewRequest = async () => {
    setIsModalVisible(true);
  }

  const handleCloseModal = async () => {
    setIsModalVisible(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/employee/request', {
        // employeeName,
        startDate,
        endDate,
        reason,
      });
      if (response.data.success) {
        setIsModalVisible(false);
      } else {
        console.error('Request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 height100">
                <nav className="bg-white border-gray-200 dark:bg-gray-900 my-4">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <p className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</p>
                            <button className="add-btn" onClick={handleNewRequest}>New Request</button>
                            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</a>
                        </div>
                    </div>
                </nav>
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/20 py-4 px-6 text-left text-gray-600 font-bold uppercase">ID</th>
                            <th className="w-1/20 py-4 px-6 text-left text-gray-600 font-bold uppercase">Start Date</th>
                            <th className="w-1/20 py-4 px-6 text-left text-gray-600 font-bold uppercase">End Date</th>
                            <th className="w-1/20 py-4 px-6 text-left text-gray-600 font-bold uppercase">Reason</th>
                            <th className="w-1/20 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                            <th className="w-1/20 py-4 px-6 text-left text-gray-600 font-bold uppercase"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr>
                            <td className="py-4 px-6 border-b border-gray-200">1</td>
                            <td className="py-4 px-6 border-b border-gray-200">2024-04-09</td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate">2024-04-11</td>
                            <td className="py-4 px-6 border-b border-gray-200">Xin nghỉ học vì gia đình có công việc</td>
                            <td class="py-4 px-6 border-b border-gray-200">
                                <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <button type="button"
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>   
                        </tr>
                        <tr>
                            <td className="py-4 px-6 border-b border-gray-200">2</td>
                            <td className="py-4 px-6 border-b border-gray-200">2024-04-09</td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate">2024-04-11</td>
                            <td className="py-4 px-6 border-b border-gray-200">Xin nghỉ học vì gia đình có công việc</td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <span className="bg-yellow-500 text-white py-1 px-2 rounded-full text-xs">Progress</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <button type="button"
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td> 
                        </tr>
                        <tr>
                            <td className="py-4 px-6 border-b border-gray-200">3</td>
                            <td className="py-4 px-6 border-b border-gray-200">2024-04-09</td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate">2024-04-11</td>
                            <td className="py-4 px-6 border-b border-gray-200">Xin nghỉ học vì gia đình có công việc</td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <button type="button"
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td> 
                        </tr>                                                      
                    </tbody>
                </table>
            </div>
      <div className={`request-modal ${isModalVisible ? 'modal-visible' : 'modal-hidden'}`}>
        <div className='modal-container'>
          <div className='modal-header'>
            <h3>NEW REQUEST</h3>
          </div>
          <form className='modal-content' onSubmit={handleSubmit}>
            <div className='modal-input-area'>
              <label>Employee's name</label>
              <input placeholder="Eg: Nguyen Van A" value={employeeName} onChange={e => setEmployeeName(e.target.value)}></input>
              <label>Start Date</label>
              <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}></input>
              <label>End Date</label>
              <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}></input>
              <label>Reason</label>
              <input placeholder="" value={reason} onChange={e => setReason(e.target.value)}></input>
            </div>
            <div className='access-modal-button'>
              <button className='submit-modal-btn' type="submit">SUBMIT</button>
            </div>
            <div className='cancel-modal-button'>
              <button className='submit-modal-btn modal-cancel' onClick={handleCloseModal}>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Employee;
