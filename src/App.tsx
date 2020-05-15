import React from 'react';
import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";
import './App.css';

export interface IPageState {
  title?: string;
  description?: string;
}
export interface IPageProps {
  title?: string;
  description?: string;
}

export class App extends React.Component<IPageProps, IPageState> {
  state: IPageState= {};
  public static defaultProps = {
    title: "PS Software Development Life Cycle Tool",
    description: "pssdlc-too-d1 - Azure DevOps REST API and UX design in React.js"
  }

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <Page className="pssdlc-hub flex-grow">
      <Header title={this.props.title}
      description={this.props.description}
      titleSize={TitleSize.Large} />
      <p>
        <b>props.title:</b> {this.props.title} <br/>
        <b>props.description:</b> {this.props.description}
      </p>
      </Page>
      );
    }
  }
