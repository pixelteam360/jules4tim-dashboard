"use client";
import { Users } from "lucide-react";
import VideoLineChart from "./Chart/VideoLineChart";
import { useOverViewQuery } from "@/redux/features/dashboard/dashboard.api";

const OverView = () => {
  const { data } = useOverViewQuery(undefined);
  const OverView = data?.data;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-white/50 p-4 rounded-lg space-y-6 bg-secondary">
          <div className="bg-white rounded-lg inline-block text-black p-3">
            <Users />
          </div>
          <p className="text-xl">{OverView?.userCount}</p>
          <h3 className="text-xl text-white/50">Total User</h3>
        </div>
        <div className="border border-white/50 p-4 rounded-lg space-y-6 bg-secondary">
          <div className="bg-white rounded-lg inline-block text-black p-3">
            <Users />
          </div>
          <p className="text-xl">{OverView?.active}</p>
          <h3 className="text-xl text-white/50">Total Subscriber</h3>
        </div>
        <div className="border border-white/50 p-4 rounded-lg space-y-6 bg-secondary">
          <div className="bg-white rounded-lg inline-block text-black p-3">
            <Users />
          </div>
          <p className="text-xl">{OverView?.mentorCount}</p>
          <h3 className="text-xl text-white/50">Total Mentor</h3>
        </div>
        <div className="border border-white/50 p-4 rounded-lg space-y-6 bg-secondary">
          <div className="bg-white rounded-lg inline-block text-black p-3">
            <Users />
          </div>
          <p className="text-xl">{OverView?.pastorCount}</p>
          <h3 className="text-xl text-white/50">Total Pastor</h3>
        </div>
      </div>

      <div className="border border-white/50 p-4 rounded-lg space-y-6 bg-secondary">
        <VideoLineChart />
      </div>
    </div>
  );
};

export default OverView;
