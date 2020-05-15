import React from 'react';
import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";
import './App.css';

function App() {
  return (
    <Page className="pssdlc-hub flex-grow">
      <Header title='PS Software Development Life Cycle Tool'
        description="pssdlc-too-d1 - Azure DevOps REST API and UX design in React.js"
        titleSize={TitleSize.Large} />
    </Page>
  );
}

export default App;
