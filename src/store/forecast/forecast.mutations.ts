import { StoreMutations } from "../store.mutations";
import { IForecastState } from "./forecast.state";

class ForecastMutations extends StoreMutations<IForecastState>{


}

export default new ForecastMutations();
