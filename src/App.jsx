import { QueryClientProvider } from "@tanstack/react-query";
import { QUERYCLIENT } from "./services";
import AntContext from "./contexts/AntContext";
import Rotas from "./routes/Rotas";

const APP = () => {
  return (
    <QueryClientProvider client={QUERYCLIENT}>
      <AntContext>
        <Rotas/>

      </AntContext>
    </QueryClientProvider>
  );
}

export default APP;