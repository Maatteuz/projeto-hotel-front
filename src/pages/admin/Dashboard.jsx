import Card from "../../components/Card";
import { FaCircle, FaRegUser } from "react-icons/fa";
import CardReservas from "../../components/CardReservas";
import { MdOutlineBed } from "react-icons/md";

const Dashboard = () => {
    return (
        <main className="p-8 bg-[#fcfaf8] flex flex-col gap-6">

            {/* CARD 1: Status dos Quartos */}
            <Card
                titulo="Status dos Quartos"
                // Aqui passamos a LEGENDA inteira como prop info
                info={
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-green-500" /> Vago</span>
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-blue-800" /> Ocupado</span>
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-yellow-500" /> Reservado</span>
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-red-500" /> Manutenção</span>
                    </div>
                }
            >
                <div className="h-32 rounded-xl flex items-center justify-center text-gray-400">
                    Grid de Quartos aqui...
                </div>
            </Card>

            {/* CARD 2: Reservas Recentes */}
            <Card
                titulo="Reservas Recentes"
                // O link agora tem estilo de botão amarelo
                info={
                    <a
                        href="#"
                        className="bg-white
                        hover:text-black
                        text-blue-900 hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                        Ver todas <span>&rarr;</span>
                    </a>
                }
            >
                {/* ... conteúdo do card ... */}
                <CardReservas
                  foto={ <FaRegUser className=" text-xl text-gray-900"/>}
                  nome="Carlos eduardo mendesa"
                 
                  status="pendente"

                  quarto={
                  <p>suíte presidencial 101</p>}
                    dados={<p>01 fev - 05 fev</p>}
                    valor={<p>R$ 1.500,00</p>}
                    forma={<p>Cartão de Débito</p>}
                >
                </CardReservas>

                  <CardReservas
                  foto={ <FaRegUser className=" text-xl text-gray-900"/>}
                  nome="Roberto Almeida"
                 
                  status="pago"

                  quarto={
                  <p>Quarto Standard 103</p>}
                    dados={<p>03 fev - 06 fev</p>}
                    valor={<p>R$ 2.200,00</p>}
                    forma={<p>Dinheiro</p>}
                >
                </CardReservas>

                
                  <CardReservas
                  foto={ <FaRegUser className=" text-xl text-gray-900"/>}
                  nome="Fernanda Oliveira"
                 
                  status="pedente"

                  quarto={
                  <p>Suíte Master 101</p>}
                    dados={<p>15 fev - 20 fev</p>}
                    valor={<p>3.300,00</p>}
                    forma={<p>transferencia</p>}
                >
                </CardReservas>
            </Card>

        </main>
    );
}

export default Dashboard;