import styled from "styled-components";
import bg from "../src/images/bg.jpg"
import { InnerLayout, MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import React, { useState ,useMemo} from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Expense from "./components/Expense/Expense";
import Income from "./components/Income/Income";

function App() {
  const [active,setActive] = useState(1)
  
  const displayData = ()=>{
    switch (active) {
      case 1:
        return <Dashboard></Dashboard>;
      case 2:
        return <Dashboard/>;
      case 3:
        return <Income/>;
      case 4:
        return <Expense/>;
    }
  }
  
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
    <main>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      
      </MainLayout>
    </main>
    </AppStyled>

  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  height: 100%;
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;


export default App;
