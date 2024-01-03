import Guru from "../assets/guru.jpg";

const ResponsiveBackgroundInfo = ({ name, title }) => {
    const backgroundStyle = {
      backgroundImage: `url(${Guru.src})`,
      backgroundSize: 'cover',
      backgroundAttachment: "fixed",
        height: '400px',
    };
  
    return (
      <div style={backgroundStyle}>
        <div className="h-full bg-black opacity-40 flex justify-between items-end">
          <div className="text-white flex mb-4 w-[60%] sm:w-[50%] ml-8 flex-col">
            <div className="font-small ">{name}</div>
            <h1 className="md:text-4xl sm:text-2xl font-extrabold">{title}</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResponsiveBackgroundInfo;
  