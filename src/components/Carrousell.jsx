import React from 'react';

const Carrousell = (props) => {
  return (
    <div className="overflow-x-auto w-full flex">
      <div className="min-w-max flex gap-2 px-5 py-7">
        {props.showedMenu.map((ele, i) => (
          <div key={i} className="card-96">
            <img src={ele.img} alt={ele.alt} className="card-96-img" />
            <div className="column h-full justify-between pt-5 w-full">
              <div className="">
                <p className="card-title">{ele.produk}</p>
                <p className="card-desc">{ele.desc}</p>
              </div>
              <button className="button-card">Aku Maww 😋</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousell;
