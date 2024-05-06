import Service_Card from "./Service_Card";
import useServices from "../../utility/useServices";

const Services = () => {
    const services = useServices();

    return (
        <div className="my-8">
            <div className="text-center space-y-4 my-4">
            <h4 className="text-orange-500 font-bold">Service</h4>
            <h1 className="font-bold text-3xl">Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
                services.map(service=> <Service_Card key={service._id} service={service}></Service_Card>)
            }
           </div>
        </div>

    );
};

export default Services;