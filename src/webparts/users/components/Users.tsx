import * as React from 'react';
import styles from './Users.module.scss';
import { IUsersProps } from './IUsersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ClassUsers } from './ClassUsers';
import { IUsers } from './IUsers';
import { Web } from "sp-pnp-js";
import * as jQuery from "jquery";
export default class Users extends React.Component<IUsersProps, any> {
  public constructor(props:IUsersProps,any)
  {
      
      super(props);
      this.state={
          items:[]
      }
      }
  public render(): React.ReactElement<IUsersProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className={ styles.users }>
        <div className={ styles.header }>
        <div className={ styles.grid }>
        <div className={ styles.hcard }>
          <h1>Team Members</h1>
          </div>
          <div className={ styles.hcard }  style={{paddingTop: "1rem"}}>
          <a href="https://lotusbetaanalytics.sharepoint.com/sales/Shared%20Documents/Forms/AllItems.aspx" className={styles.btn}>View All</a>
        </div>
          </div>
        </div>
        {
        this.state.items.map(function(item:IUsers){
    return(
      <div className={ styles.card }>
         <div className={ styles.grids}>
         <div className={ styles.card } style={{paddingTop: "1rem"}}>
         {/* <DescriptionIcon  fontSize="large"/> */}
           </div>
           <div className={ styles.card }>
           <h3>{item.Title}</h3>
           <h4>{item.Email}</h4>
       </div>
       <div className={ styles.card } style={{paddingTop: "1rem"}}>
       {/* <a href={item.File['LinkingUri']} className={styles.btns}>Preview</a><br /><br />
       <a href={item.File['LinkingUrl']} className={styles.download}>Download</a> */}
           </div>
      </div>
      </div>       
 ) 
})

} 
      </div>
    );
  }
  public componentDidMount()
  {
      
      // debugger;
      this._UsersList();
  }
  private _UsersList():void
  {
  
   
  let web = new Web(this.props.context.pageContext.web.absoluteUrl);  
  web.siteUsers.get().then
      ((response)=>{
        console.log(response)
          let UsersCollection=response.map(item=> new ClassUsers(item));
           let UsersCard = UsersCollection;
          this.setState({items:UsersCard});
      }
  
      )
  }

}

