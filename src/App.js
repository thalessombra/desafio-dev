import { Header } from "./Header";
import { Input } from "./Input";
import { Profile } from "./pages/perfil";
import { Button } from "./Button";

function App() {
  return (<>
    <Header>
     <Input />
    </Header>
    <Profile>
      <Button />
    </Profile>
    </>
  );
}

export default App;
