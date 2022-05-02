
import Service from '../Service/Service';
import './Services.css'
import service1 from '../../../Images/services/1.png'
import service2 from '../../../Images/services/2.png'
import service3 from '../../../Images/services/3.jpg'
const Services = () => {
    const services = [
        {
            id: 1,
            name: "Learn Programmin",
            price: "$1000",
            description: "learn basic basic programming concept with C programming and  C++",
            img: service1
        },
        {
            id: 2,
            name: "Learn Physics",
            price: "$200",
            description: "learn fundamental concept of physics for class 11-12. also clear mathemetical concept",
            img: service2
        },
        {
            id: 3,
            name: "Learn Mathematic",
            price: "$250",
            description: "Class 1-12, Admission Test, Universities and Job Test Preparation Special Courses, Model Tests and Full Directions for mathematic",
            img: service3
        }
    ]

    

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'>My Services</h1>
            <div  className='services-container'>
            {
                services.map(service => <Service 
                  key={service.id}
                  service={service}
                ></Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;