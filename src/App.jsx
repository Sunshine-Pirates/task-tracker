import { Input } from "./components/UI/input/Input";
import { SearchInput } from "./components/UI/searchInput/SearchInput";

export const App = () => {
  return (
    <div>
      <h1>Task tracker</h1>
      <SearchInput />
      <Input type="password" />
    </div>
  );
};
