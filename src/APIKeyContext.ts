import { createContext } from "react";
import { key } from "../key.json";

const APIKeyContext = createContext(key);

export default APIKeyContext;
