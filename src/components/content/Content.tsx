import { Divider } from 'antd';

const AppContent = () => {
  return (
    <>
      <div className="h-full px-12 text-start  text-white flex flex-col ">
        <div className="mt-16 w-[40%] tracking-tighter ">
          <h2 className=" text-8xl uppercase	font-semibold">
            Discover <br /> beyond <br /> space
          </h2>
          <div className="bg-white">
            <Divider />
          </div>
        </div>
        <div className="text-gray-300 text-lg	">
          <p>
            "Embart on a journey of exploration and discovery in <br />
            the vast Cepheusverse, here the universe holds <br />
            endless possibilities"
          </p>
        </div>
      </div>
    </>
  );
};

export default AppContent;
