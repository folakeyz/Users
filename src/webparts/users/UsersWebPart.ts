import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UsersWebPartStrings';
import Users from './components/Users';
import { IUsersProps } from './components/IUsersProps';

export interface IUsersWebPartProps {
  description: string;
  Name: string;
  Title: string;
  File: string;
  Email: string;
  id: string;
}

export default class UsersWebPart extends BaseClientSideWebPart<IUsersWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IUsersProps> = React.createElement(
      Users,
      {
        description: this.properties.description,
        Name: this.properties.Name,
        Title: this.properties.Title,
        File: this.properties.File,
        Email: this.properties.Email,
        id: this.properties.Email,
        context: this.context,
        pageContext: this.context.pageContext
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
