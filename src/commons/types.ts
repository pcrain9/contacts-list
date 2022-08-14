export interface singleUserProps {
  user: User;
  expandedId: number | null;
  userExpandedNewCard: Function;
  editDelReducer: Function;
}

export interface userProps {
  userList: User[];
  handleUserRequestedEdit: Function;
  handleUserRequestedDelete: Function;
}

export interface editUserThruProps {
  user: User;
  handleUserWasUpdated?(user: User): void;
  handleNewUserWasAdded?(user: User): void;
}

export interface userDeletedThruProps {
  handleUserCancelledDelete: Function;
  handleUserConfirmedDelete: Function;
  user: User;
}
