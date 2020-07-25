import React, { useReducer, createContext, ReactNode } from 'react';

import { notificationsReducer, notificationsInitialState } from './notificationsReducer';
import { NotificationsState, NotificationsAction } from './notificationActionTypes';

type NotificationsContextValue = [NotificationsState, React.Dispatch<NotificationsAction>];

const notificationsContext = createContext<NotificationsContextValue>(null);

interface NotificationsProviderParams {
  children: ReactNode;
}

function NotificationsProvider({ children }: NotificationsProviderParams) {
  const value = useReducer(notificationsReducer, notificationsInitialState);

  return <notificationsContext.Provider value={value}>{children}</notificationsContext.Provider>;
}

export { NotificationsProvider, notificationsContext };
