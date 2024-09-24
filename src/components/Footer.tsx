"use client";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Icons } from "./icons";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { loginTb } from "@/actions";
import { readSetting } from "@/actions";

export function Footer() {
  const [tempIn, setTempIn] = useState(0);
  const [tempOut, setTempOut] = useState(0);
  const [humIn, setHumIn] = useState(0);
  const [humOut, setHumOut] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [rainfall, setRainfall] = useState(0);
  const [windDirection,setWindDirection] = useState("NA");
  const [windSpeed, setWindSpeed] = useState(0);
  const [windAvg, setWindAvg] = useState(0);
  const [windStatus, setStatus] = useState(0);

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const login = await loginTb();
        const setting = await readSetting();

        if (setting && setting.data && setting.data.length > 0) {
          const token = login.token;
          let { entityType, entityId } = setting.data[0];
          const webSocket = new WebSocket(
            process.env.NEXT_PUBLIC_TB_WS_URL || ""
          );

          webSocket.onopen = () => {
            const object = {
              authCmd: {
                cmdId: 0,
                token: token,
              },
              cmds: [
                {
                  entityType: entityType,
                  entityId: entityId,
                  scope: "LATEST_TELEMETRY",
                  cmdId: 10,
                  type: "TIMESERIES",
                },
              ],
            };
            const data = JSON.stringify(object);
            webSocket.send(data);
          };

          webSocket.onmessage = (event) => {
            const receivedData = JSON.parse(event.data);
            const { subscriptionId, data } = receivedData;
            const {
              tempIn,
              tempOut,
              humIn,
              humOut,
              pressure,
              rainfall,
              windDirection,
              windSpeed,
              windAvg,
              windStatus,
            } = data;
            setTempIn(tempIn[0][1]);
            setTempOut(tempOut[0][1]);
            setHumIn(humIn[0][1]);
            setHumOut(humOut[0][1]);
            setPressure(pressure[0][1]);
            setRainfall(rainfall[0][1]);
            setWindDirection(windDirection[0][1]);
            setWindSpeed(windSpeed[0][1]);
            setWindAvg(windAvg[0][1]);
            setStatus(windStatus[0][1]);
          };

          webSocket.onclose = () => {
            console.log("Connection closed!");
          };

          return () => {
            webSocket.close();
          };
        } else {
          console.error("Setting data is null or empty");
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchLoginData();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-4">
        <div className="flex flex-col">
          <div className="flex gap-3">
            <h3 className="text-2xl">Daya</h3>
            <Icons.volt className="h-8 w-8 rounded-full bg-[#0e1426] p-1" />
          </div>
          <div className="flex gap-2">
            <p className="text-xl text-[#5f6281]">Tegangan:</p>
            <p className="text-xl text-white">{windDirection}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl text-[#5f6281]">Arus:</p>
            <p className="text-xl text-white">{windSpeed} m/s</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl text-[#5f6281]">Volt:</p>
            <p className="text-xl text-white">{windAvg}</p>
          </div>
        </div>
        <div className="flex items-end">
          {/* <p className="text-xl text-[#5f6281]">Status: </p>
          <p className="text-xl text-white px-2 rounded">
            {windStatus}
          </p> */}
          {/* <Icons.powerStatus className="h-12 w-12" /> */}
        </div>
      </div>
      <div className="flex m-4 gap-3 min-h-60">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Parallax,
          ]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {/* <SwiperSlide>
            <Card
              title="Temperature IN"
              icon={<Icons.temperature />}
              value={tempIn}
              unit={"°F"}
              texts={["", "Indoor Temperature", ""]}
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Card
              title="Humidity IN"
              icon={<Icons.droplet />}
              value={humIn}
              unit={"%"}
              texts={["", "Indoor Humidity", ""]}
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Card
              title="Pressure"
              icon={<Icons.gauge />}
              value={pressure}
              unit={"hPa"}
              texts={["", "Absolute Pressure", ""]}
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Card
              title="Rainfall"
              icon={<Icons.cloudRain />}
              value={rainfall}
              unit={"mm"}
              texts={["", "Total", ""]}
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Card
              title="Temperature OUT"
              icon={<Icons.temperature />}
              value={tempOut}
              unit={"°F"}
              texts={["", "Outdoor Temperature", ""]}
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <Card
              title="Status"
              icon={<Icons.powerStatus />}
              value={windStatus} // Mengubah nilai status menjadi "Aktif" atau "Tidak Aktif"
              unit={""} // Menghapus unit karena status tidak memerlukan unit
              texts={["", "status", ""]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Daya" // Mengubah judul menjadi Daya
              icon={<Icons.volt />}
              value={windAvg} // Menggunakan windAvg untuk daya
              unit={"W"} // Mengubah unit menjadi Watt
              texts={["", "Daya", ""]} // Mengubah teks menjadi Daya
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Arus"
              icon={<Icons.volt />}
              value={windSpeed} // Menggunakan windSpeed untuk arus
              unit={"A"} // Mengubah unit menjadi Ampere
              texts={["", "Arus", ""]} // Mengubah teks menjadi Arus
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Tegangan" // Mengubah judul menjadi Tegangan
              icon={<Icons.volt />}
              value={windDirection} // Menggunakan windDirection untuk tegangan
              unit={"V"} // Mengubah unit menjadi Volt
              texts={["", "Tegangan", ""]} // Mengubah teks menjadi Tegangan
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
