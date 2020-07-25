function notificationsAreSupported() {
  return !('Notification' in window);
}

function showNotificationsUnsupportedMessage() {
  alert('This browser does not support desktop notification');
}

function createNotification(message: string, body: string) {
  new Notification(message, { body });
}

function notificationsPermissionsAreGranted(permission: NotificationPermission = Notification.permission) {
  return permission === 'granted';
}

function notificationsPermissionsAreDenied(permission: NotificationPermission = Notification.permission) {
  return permission === 'denied';
}

function askForNotificationsPermission(onPermissionsGranted: () => void) {
  Notification.requestPermission().then(function (permission: NotificationPermission) {
    const permissionsAreGranted = notificationsPermissionsAreGranted(permission);
    if (permissionsAreGranted) {
      onPermissionsGranted();
    }
  });
}

function showAppNotification(message: string, body: string) {
  if (!notificationsAreSupported()) {
    showNotificationsUnsupportedMessage();
    return;
  }

  if (notificationsPermissionsAreGranted()) {
    createNotification(message, body);
  } else if (!notificationsPermissionsAreDenied()) {
    askForNotificationsPermission(function () {
      createNotification(message, body);
    });
  }
}

function showNewPullRequestsNotifications() {
  // showAppNotification('You have new pull requests to check!', 'Open the application to check them');
}

export { showNewPullRequestsNotifications };
