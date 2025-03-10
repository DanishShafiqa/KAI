import { axiosInstance } from "@/helper/api";
import { getServerCookie } from "@/helper/server-cookie";
import React from "react";
import HistoryCard from "./_component/HistoryCard";
import { History } from "@/app/karyawan/types";
import FilterHistory from "./FilterHistory";

const GetDataHistory = async (
    start_date: string,
    end_date: string
): Promise<History[]> => {
    try {
    const url =
        start_date !== "" && end_date !== ""
        ? `/purchase?start_date=${start_date}&end_date=${end_date}`
        : `/purchase`;
    const token = await getServerCookie("token");
    const response: any = await axiosInstance.get(url, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    if (!response.data.success) return [];

    return response.data.data;
    } catch (error) {
    console.log(error);
    return [];
    }
};
type Props = {
  searchParams: {
    start_date?: string;
    end_date?: string;
  };
};

const page = async (myProp: Props) => {
  const start_date = (await myProp.searchParams).start_date?.toString() || "";
  const end_date = (await myProp.searchParams).end_date?.toString() || "";

  const historyData = await GetDataHistory(start_date, end_date);

  return (
    <div>
      <h1 className="text-left text-2xl font-bold p-3">History Pemesanan</h1>
      <FilterHistory startDate={start_date} endDate={end_date} />
      <div className="flex flex-col p-3">
        {historyData.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
