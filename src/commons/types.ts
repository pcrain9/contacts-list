export interface singleUserProps {
  user: User;
  expandedId: number;
  userExpandedNewCard: Function;
  editDelReducer: Function;
}

export interface userProps {
  userList: User[];
  user: User;
  handleUserRequestedEdit: Function;
  handleUserRequestedDelete: Function;
}

export interface addNewUserThruProps {
}

export interface editUserThruProps {
  user: User;
  handleUserWasUpdated: Function;
  handleNewUserWasAdded(user: User): void;
}

export interface userDeletedThruProps {
  handleUserCancelledDelete: Function;
  handleUserConfirmedDelete: Function;
  user: User;
}
