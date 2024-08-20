import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className='custom-heading'>Admin Dashboard</h1>
      <p>Hi Ezekiel Nyeme, welcome to your dashboard</p>


      <div className="grid grid-cols-2 gap-4">
  <div className="bg-blue-500 p-4 text-white">
    Element 1
  </div>
  <div className="bg-green-500 p-4 text-white">
    Element 2
  </div>
</div>

    </div>
  );
};

export default AdminDashboard;
