import { FiSunrise, FiSunset, FiSun, FiWind } from "react-icons/fi";
import { MdOutlineNearMe } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDown,
  BsPlusLg,
  BsDroplet,
  BsCloudRain,
  BsThermometerHalf,
  BsCloudRainHeavy,
  BsCloudy,
} from "react-icons/bs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxis: {
      min: 0,
      max: 100,
      ticks: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
};

const labels = ["23%", "29%", "58%", "52%", "33%", "20%", "32%", "49%"];

type typeInfoCards = {
  humidity: { value: number; text: string };
  wind: number;
  precipitation: number;
  uvIndex: { value: number; text: string };
  feelsLike: number;
  chanceOfRain: { value: number; text: string };
};

const infoCardsData: typeInfoCards = {
  humidity: {
    value: 82,
    text: "bad",
  },
  wind: 8,
  precipitation: 1.4,
  uvIndex: {
    value: 4,
    text: "medium",
  },
  feelsLike: 30,
  chanceOfRain: {
    value: 42,
    text: "bad",
  },
};

const chartData: typeWeatherChart = {
  data: [
    {
      time: "Now",
      icon: <FiSun />,
      value: 27,
    },
    {
      time: "11:00",
      icon: <FiSun />,
      value: 28,
    },
    {
      time: "12:00",
      icon: <BsCloudy />,
      value: 28,
    },
    {
      time: "13:00",
      icon: <BsCloudy />,
      value: 29,
    },
    {
      time: "14:00",
      icon: <FiSun />,
      value: 30,
    },
    {
      time: "15:00",
      icon: <BsCloudy />,
      value: 29,
    },
    {
      time: "16:00",
      icon: <BsCloudy />,
      value: 29,
    },
    {
      time: "17:00",
      icon: <FiSun />,
      value: 28,
    },
  ],
};

const App = () => {
  return (
    <div className="font-nunito h-screen w-full bg-[#5c9ce5] flex">
      <LeftSection />
      <div className="flex-1">
        <RightSection />
      </div>
    </div>
  );
};

const LeftSection = () => {
  return (
    <div
      style={{
        backgroundBlendMode: "overlay",
        backgroundImage: `url("/images/sunny.jpg")`,
        backgroundPosition: "bottom right",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full p-8 w-[20rem] space-y-16 bg-[#5c9ce599] backdrop-blur-[2px]">
        <div className="flex items-center justify-between">
          <button className="p-1 rounded-md bg-white text-[#5c9ce5]">
            <BsPlusLg />
          </button>
          <div className="flex space-x-1">
            <div className="h-2 w-4 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-[#ffffff80]"></div>
            <div className="h-2 w-2 rounded-full bg-[#ffffff80]"></div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-white text-xs">°C</p>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <p className="text-white text-xs">°F</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="text-white flex items-center space-x-2">
              <MdOutlineNearMe className="h-5 w-5" />
              <p className="drop-shadow">New York, USA</p>
            </div>
            <div className="text-white flex items-center space-x-2">
              <FiSunrise />
              <p className="drop-shadow">07:19</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-white flex items-center space-x-2">
              <p className="text-sm font-[200] drop-shadow">Today 28 Sept</p>
            </div>
            <div className="text-white flex items-center space-x-2">
              <FiSunset />
              <p className="drop-shadow">19:32</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <button className="p-2 rounded-full text-white hover:bg-[#ffffff30] transition ease-in-out duration-150">
              <BsChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div>
            <p className="text-7xl text-white font-bold">27°</p>
            <div className="flex items-center text-white space-x-2">
              <FiSun />
              <p className="text-xl">Sunny</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-white hover:bg-[#ffffff30] transition ease-in-out duration-150">
              <BsChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#e4f1ff] p-16 space-y-8 overflow-auto">
      <div className="flex justify-between">
        <div className="font-[600]">
          <p className="text-xl">Welcome back Isabella!</p>
          <p>Check out today's weather information</p>
        </div>
        <div className="flex items-center space-x-4">
          <button>
            <HiOutlineDotsHorizontal className="h-5 w-5" />
          </button>
          <div>
            <img
              src="https://i.pravatar.cc/64?img=5"
              alt=""
              className="rounded-md h-10 w-10 shadow-sm border border-[#5c9ce5]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-2xl shadow-xl shadow-[#00000005] p-8 space-y-8">
          <div className="flex justify-between">
            <div>
              <p>Upcoming hours</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 p-1 px-2 text-sm rounded-lg bg-gray-100 text-gray-400">
                <p>Rain precipitation</p>
                <span>
                  <BsChevronDown />
                </span>
              </button>
              <button className="flex items-center space-x-2 p-1 px-2 text-sm rounded-lg bg-gray-100">
                <p>Next days</p>
                <span>
                  <BsChevronRight />
                </span>
              </button>
            </div>
          </div>
          <WeatherChart data={chartData} />
        </div>
      </div>
      <div className="flex flex-col flex-1 space-y-8">
        <p className="text-xl font-[600]">More details of today's weather</p>
        <div className="grid grid-cols-3 gap-8 h-full">
          <HumidityCard data={infoCardsData} />
          <WindCard data={infoCardsData} />
          <Precipitation data={infoCardsData} />
          <UVIndex data={infoCardsData} />
          <FeelsLike data={infoCardsData} />
          <ChanceOfRain data={infoCardsData} />
        </div>
      </div>
    </div>
  );
};

const HumidityCard = ({ data }: { data: typeInfoCards }) => {
  return (
    <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg shadow-[#00000020]">
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p>Humidity</p>
          <div className="bg-[#5c9ce5] text-white p-2 rounded-full">
            <span>
              <BsDroplet />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end space-x-2">
          <p className="text-2xl font-bold">{`${data.humidity.value}%`}</p>
          <p>{data.humidity.text}</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3">
            <p>good</p>
            <p>normal</p>
            <p>bad</p>
          </div>
          <div>
            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className={`h-full bg-[#5c9ce5]`}
                style={{ width: `${data.humidity.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WindCard = ({ data }: { data: typeInfoCards }) => {
  return (
    <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg shadow-[#00000020]">
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p>Wind</p>
          <div className="bg-[#5c9ce5] text-white p-2 rounded-full">
            <span>
              <FiWind />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end space-x-2">
          <p className="text-2xl font-bold">{data.wind}</p>
          <p>km/h</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-center">
            <p>0</p>
            <p>10</p>
            <p>20</p>
            <p>30</p>
            <p>40</p>
            <p>50</p>
          </div>
          <div>
            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-[#5c9ce5]"
                style={{ width: `${data.wind * 2}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UVIndex = ({ data }: { data: typeInfoCards }) => {
  return (
    <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg shadow-[#00000020]">
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p>UV Index</p>
          <div className="bg-[#5c9ce5] text-white p-2 rounded-full">
            <span>
              <FiSun />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end space-x-2">
          <p className="text-2xl font-bold">{data.uvIndex.value}</p>
          <p>{data.uvIndex.text}</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-5 text-center [&>*:nth-child(-n+4)]:border-r">
            <p>0-2</p>
            <p>3-5</p>
            <p>6-7</p>
            <p>8-10</p>
            <p>11+</p>
          </div>
          <div>
            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-[#5c9ce5]"
                style={{ width: `${(data.uvIndex.value / 12) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeelsLike = ({ data }: { data: typeInfoCards }) => {
  return (
    <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg shadow-[#00000020]">
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p>Feels like</p>
          <div className="bg-[#5c9ce5] text-white p-2 rounded-full">
            <span>
              <BsThermometerHalf />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end space-x-2">
          <p className="text-2xl font-bold">{`${data.feelsLike}°`}</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3">
            <p>0°</p>
            <p className="text-center">25°</p>
            <p className="text-end">50°</p>
          </div>
          <div>
            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-[#5c9ce5]"
                style={{ width: `${(data.feelsLike / 50) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChanceOfRain = ({ data }: { data: typeInfoCards }) => {
  return (
    <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg shadow-[#00000020]">
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p>Chance of rain</p>
          <div className="bg-[#5c9ce5] text-white p-2 rounded-full">
            <span>
              <BsCloudRainHeavy />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end space-x-2">
          <p className="text-2xl font-bold">{data.chanceOfRain.value}%</p>
          <p>{data.chanceOfRain.text}</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-5 text-center [&>*:nth-child(-n+4)]:border-r">
            <p>0%</p>
            <p>25%</p>
            <p>50%</p>
            <p>75%</p>
            <p>100%</p>
          </div>
          <div>
            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-[#5c9ce5]"
                style={{ width: `${data.chanceOfRain.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Precipitation = ({ data }: { data: typeInfoCards }) => {
  return (
    <div className="flex items-center bg-white p-8 rounded-2xl shadow-lg shadow-[#00000020]">
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p>Precipitation</p>
          <div className="bg-[#5c9ce5] text-white p-2 rounded-full">
            <span>
              <BsCloudRain />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end space-x-2">
          <p className="text-2xl font-bold">{data.precipitation}</p>
          <p>cm</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-10 text-center [&>*:nth-child(-n+9)]:border-r">
            <p>0</p>
            <p>10</p>
            <p>20</p>
            <p>30</p>
            <p>40</p>
            <p>50</p>
            <p>60</p>
            <p>70</p>
            <p>80</p>
            <p>90</p>
          </div>
          <div>
            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-[#5c9ce5]"
                style={{ width: `${data.precipitation * 10}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type typeWeatherChart = {
  data: Array<typeWeatherChartItem>;
};

type typeWeatherChartItem = {
  time: string;
  icon: React.ReactNode;
  value: number;
};

const WeatherChart = ({ data }: { data: typeWeatherChart }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data: [23, 29, 58, 52, 33, 20, 32, 49],
        borderColor: "#338cea",
        backgroundColor: "#5C9CE575",
      },
    ],
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        {data.data.map((item, index) => {
          return (
            <div
              key={`chart-item-${index}`}
              className="flex flex-col items-center space-y-1"
            >
              <p>{item.time}</p>
              <span>{item.icon}</span>
              <p>{`${item.value}°`}</p>
            </div>
          );
        })}
      </div>
      <div className="max-h-[10rem] w-full">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default App;
