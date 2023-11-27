import { Carrousell, Footer, Layout, useEffect, useState } from "../exporter";

const Vintage = () => {
  const ourFood = [
    "./images/cibay.png",
    "./images/marimas.png",
    "./images/cirambay.png",
  ];

  const Food = [
    {
      img: "./images/cipak.png",
      alt: "Cipak",
      produk: "Cipak",
      desc: "singkatan dari kata 'cimol dempak' atau 'gepeng', yang terbuat dari aci dan pastinya enak!",
    },
    {
      img: "./images/cibay.png",
      alt: "Cibay",
      produk: "Cibay",
      desc: "singkatan dari aci ngambay ini pastinya udah ga asing ga sih?",
    },
  ];

  const Drink = [
    {
      img: "./images/teh_sisri.png",
      alt: "Teh Sisri",
      produk: "Teh Sisri",
      desc: "Es buah melon ditambahin selasih yang pastinya ngebuat es melon selasih ini makin seger!",
    },
    {
      img: "./images/marimas.png",
      alt: "Marimas",
      produk: "Marimas",
      desc: "Es buah melon ditambahin selasih yang pastinya ngebuat es melon selasih ini makin seger!",
    },
    {
      img: "./images/top_ice.png",
      alt: "Top Ice",
      produk: "Top Ice",
      desc: "Es buah melon ditambahin selasih yang pastinya ngebuat es melon selasih ini makin seger!",
    },
  ];

  const [Menu, setMenu] = useState("food");
  const [showedMenu, setShowedMenu] = useState(Food);

  const showMenu = (menu) => {
    if (menu === "food") {
      setShowedMenu(Food);
      setMenu("food");
    } else {
      setShowedMenu(Drink);
      setMenu("drink");
    }
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if (visited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("visited", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div
        className={`bg-slate-100 bg-ds-patern-1 bg-no-repeat bg-cover fixed inset-0 flex items-center justify-center z-50 ${
          loading ? "visible" : "hidden"
        }`}
      >
        <img src="/svg/collabLogo.svg" alt="" />
      </div>
      <Layout className="bg-dark-blue bg-no-repeat bg-cover bg-patern-1">
        <div className="column-center w-full gap-10">
          <img src="/svg/collabLogo.svg" alt="" className="header-img" />
          <h1 className="font-rubik text-4xl text-center w-5/6 text-white text-shadow">
            Yuk Kepoin Menu Bazzar dari{" "}
            <span className="font-lily text-yellow-mencret">DKV 2</span>!
          </h1>
          <div className="column-center p-0 w-full  ">
            <h1 className="text-light-brown font-inter text-center bg-dark-brown rounded-t-lg p-2 w-max h-max">
              ! Best Offer !
            </h1>
            <div className="column w-full gap-1">
              {ourFood.map((img, i) => (
                <div key={i} className="img-container">
                  <img key={i} src={img} alt="" className="img-hero" />
                </div>
              ))}
            </div>
          </div>
          <a
            href="#ourMenu"
            className="flex items-center gap-3 w-full justify-center"
          >
            <img src="./svg/curuk.svg" alt="" />
            <p className="font-inter text-white font-semibold text-center w-2/3">
              Swipe buat lihat menu lainnya!
            </p>
            <img src="./svg/curuk.svg" alt="" />
          </a>
        </div>
      </Layout>
      <Layout className="column items-center gap-14 px-0 pb-32 rounded-xl w-full bg-blue bg-patern-2 bg-cover bg-no-repeat">
        <div id="ourMenu" className="px-6 column items-center gap-10">
          <h1 id="ourMenu" className="text-[#1F2937] rubik-bold w-5/6">
            Nih Menu Dari Kita 😎
          </h1>
          <div className="btn-container">
            <button
              onClick={() => showMenu("food")}
              className={
                Menu === "food"
                  ? "menu-show rounded-l-full"
                  : "menu-hide rounded-l-full"
              }
            >
              <img src="./svg/food.svg" alt="" className="w-5 h-5" />
            </button>
            <button
              onClick={() => showMenu("drink")}
              className={
                Menu === "drink"
                  ? "menu-show rounded-r-full"
                  : "menu-hide rounded-r-full"
              }
            >
              <img src="./svg/drink.svg" alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <Carrousell showedMenu={showedMenu} />
      </Layout>
      <Layout className="bg-ds-blue p-0 relative">
        <img
          src="/images/mascot.png"
          alt=""
          className=" h-60 absolute right-0 -top-28"
        />
        <img src="/images/chesspatern.png" alt="" />
        <div className="p-6 column gap-10">
          <img src="/svg/TakeALook.svg" alt="" className="w-3/5" />
          <h1 className="rubik-bold text-left">
            Website ini adalah hasil kolaborasi antara Commit Studio dengan DKV
            2.
          </h1>
        </div>
        <img src="/images/chesspatern-2.png" alt="" />
      </Layout>
      <Layout className="bg-ds-orange">
        <Footer />
      </Layout>
    </>
  );
};

export default Vintage;
