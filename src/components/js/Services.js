import React from "react";
import "../css/Services.css";
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="services-container">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="service-card">
              <div className="service-marker">
                {Icon && <Icon size={26} />}
              </div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
