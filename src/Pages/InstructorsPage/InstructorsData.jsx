const InstructorsData = ({ data }) => {
    const {

        instructor_name,
        instructor_email,
        instructor_photo,
        total_students
    } = data || {};


    return (
        <div className="hero min-h-screen bg-base-300  rounded-lg">
            <div className="hero-content flex-col lg:flex-row  ">

                <img src={instructor_photo} className="w-2/3 rounded-lg shadow-2xl" />

                <div className="">
                    <h5 className="text-normal font-semibold">Instructor Name: {instructor_name}</h5>
                    <p className=""> Email: {instructor_email}</p>


                </div>
            </div>
        </div>
    );
};

export default InstructorsData;