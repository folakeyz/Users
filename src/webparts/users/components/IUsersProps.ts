import { WebPartContext } from "@microsoft/sp-webpart-base"; 
import { PageContext } from '@microsoft/sp-page-context';  
export interface IUsersProps {
  description: string;
  Name:string;
  Title:string;
  File:string;
  Email:string;
  id:string;
  context:WebPartContext; 
  pageContext: PageContext; 
}
