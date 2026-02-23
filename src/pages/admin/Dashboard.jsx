import Card from "../../components/Card";
import { FaCircle } from "react-icons/fa";
import ChartRoom from "../../components/ChartRoom";

const Dashboard = () => {
    return (
        <main className="p-8 bg-[#fcfaf8] flex flex-col gap-6">

            <div className="flex">
                <div className="flex-1"></div>
                <div className="w-75">
                    <ChartRoom />
                </div>
            </div>
        </main>
    );
}

export default Dashboard;