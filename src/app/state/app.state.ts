import { CountriesState } from "@core/models/country.state";
import { ActionReducerMap } from "@ngrx/store";
import { countriesReducer } from "./reducers/countries.reducers";

export interface AppState {
    countries: CountriesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  countries: countriesReducer
}
