import { createContext } from "react";
import { stocks_key } from "../key.json";

const APIKeyContext = createContext(stocks_key);

export default APIKeyContext;
