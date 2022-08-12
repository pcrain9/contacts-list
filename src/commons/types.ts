
export interface singleUserProps {
    user: User;
    expandedId: number;
    userExpandedNewCard: Function;
  }

export interface userProps {
    userList: User[];
    user: User;
  }

export interface addNewUserThruProps {
    handleNewUserWasAdded(user:User):void;
}