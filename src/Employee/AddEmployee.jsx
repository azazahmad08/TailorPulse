const AddEmployee = () => {
    return (
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Information</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="id">ID</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="id" name="id" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="middleName">Middle Name</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="middleName" name="middleName" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="todayStringFormat">Todays Date</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="todayStringFormat" name="todayStringFormat" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="joinningDateStringFormat">Joining Date</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="joinningDateStringFormat" name="joinningDateStringFormat" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="emailAddress">Email Address</label>
          <input className="form-input w-full border rounded-xl p-2" type="email" id="emailAddress" name="emailAddress" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="phoneNumber" name="phoneNumber" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="gender">Gender</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="gender" name="gender" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="age">Age</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="age" name="age" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="birthdate">Birthdate</label>
          <input className="form-input w-full border rounded-xl p-2" type="date" id="birthdate" name="birthdate" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="bloodGroup">Blood Group</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="bloodGroup" name="bloodGroup" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="nationalId">National ID</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="nationalId" name="nationalId" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="birthCertificate">Birth Certificate</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="birthCertificate" name="birthCertificate" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="fatherName">Fathers Name</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="fatherName" name="fatherName" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="motherName">Mothers Name</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="motherName" name="motherName" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mt-4 mb-2">Present Address</h2>
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prsHouse_Village">House/Village</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prsHouse_Village" name="prsHouse_Village" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prsRoadNo">Road No</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prsRoadNo" name="prsRoadNo" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prsThana">Thana</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prsThana" name="prsThana" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prsDistrict">District</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prsDistrict" name="prsDistrict" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prsPost_Office">Post Office</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prsPost_Office" name="prsPost_Office" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prsPost_Code">Post Code</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prsPost_Code" name="prsPost_Code" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mt-4 mb-2">Permanent Address</h2>
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prmHouse_Village">House/Village</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prmHouse_Village" name="prmHouse_Village" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prmRoadNo">Road No</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prmRoadNo" name="prmRoadNo" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prmThana">Thana</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prmThana" name="prmThana" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prmDistrict">District</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prmDistrict" name="prmDistrict" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prmPost_Office">Post Office</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prmPost_Office" name="prmPost_Office" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="prmPost_Code">Post Code</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="prmPost_Code" name="prmPost_Code" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mt-4 mb-2">Job Details</h2>
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="terminationDate">Termination Date</label>
          <input className="form-input w-full border rounded-xl p-2" type="date" id="terminationDate" name="terminationDate" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="joiningDate">Joining Date</label>
          <input className="form-input w-full border rounded-xl p-2" type="date" id="joiningDate" name="joiningDate" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="calculatiomMethodName">Calculation Method</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="calculatiomMethodName" name="calculatiomMethodName" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="baseSalary">Base Salary</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="baseSalary" name="baseSalary" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="grossSalary">Gross Salary</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="grossSalary" name="grossSalary" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="houseRent">House Rent</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="houseRent" name="houseRent" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="med">Medical Allowance</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="med" name="med" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="conv">Conveyance</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="conv" name="conv" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="taxAmount">Tax Amount</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="taxAmount" name="taxAmount" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="employeeIdNo">Employee ID No</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="employeeIdNo" name="employeeIdNo" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="designationId">Designation ID</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="designationId" name="designationId" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="sectionId">Section ID</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="sectionId" name="sectionId" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="overTime">Over Time</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="overTime" name="overTime" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="grade">Grade</label>
          <input className="form-input w-full border rounded-xl p-2" type="number" id="grade" name="grade" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="earnedLeave">Earned Leave</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="earnedLeave" name="earnedLeave" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="leaveRemaining">Leave Remaining</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="leaveRemaining" name="leaveRemaining" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="accountType">Account Type</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="accountType" name="accountType" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="bankAcNumber">Bank Account Number</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="bankAcNumber" name="bankAcNumber" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="bankName">Bank Name</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="bankName" name="bankName" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="rocketNumber">Rocket Number</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="rocketNumber" name="rocketNumber" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="status">Status</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="status" name="status" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="offDay">Off Day</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="offDay" name="offDay" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="defaultShift">Default Shift</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="defaultShift" name="defaultShift" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="isUser">Is User</label>
          <input className="form-input w-full border rounded-xl p-2" type="checkbox" id="isUser" name="isUser" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mt-4 mb-2">Documents</h2>
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="profilePhoto">Profile Photo</label>
          <input className="form-input w-full border rounded-xl p-2" type="file" id="profilePhoto" name="profilePhoto" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="nidFront">NID Front</label>
          <input className="form-input w-full border rounded-xl p-2" type="file" id="nidFront" name="nidFront" />
        </div>
        <div className="form-group border rounded-md p-4">
          <label className="block text-sm font-medium mb-1" htmlFor="nidBack">NID Back</label>
          <input className="form-input w-full border rounded-xl p-2" type="file" id="nidBack" name="nidBack" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mt-4 mb-2">Application Settings</h2>
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="applicationGenerateUrl">Application Generate URL</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="applicationGenerateUrl" name="applicationGenerateUrl" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="removeFiles">Remove Files</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="removeFiles" name="removeFiles" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="createdDate">Created Date</label>
          <input className="form-input w-full border rounded-xl p-2" type="date" id="createdDate" name="createdDate" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="updatedDate">Updated Date</label>
          <input className="form-input w-full border rounded-xl p-2" type="date" id="updatedDate" name="updatedDate" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="rfidCardNo">RFID Card No</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="rfidCardNo" name="rfidCardNo" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="localupload">Local Upload</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="localupload" name="localupload" />
        </div>
        <div className="form-group border rounded-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium mb-1" htmlFor="contractType">Contract Type</label>
          <input className="form-input w-full border rounded-xl p-2" type="text" id="contractType" name="contractType" />
        </div>
      </form>
    </div>
    );
};

export default AddEmployee;