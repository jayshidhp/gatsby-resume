import React from 'react';

const Certifications = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Certifications</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.certificate}>
          <h2 className="item-header text-lg">{item.certificate}</h2>
          <h3 className="item-sub">{item.organization}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end || 'PRESENT'}
          </p>
        </div>
      ))}
  </section>
);

export default Certifications;
