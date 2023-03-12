import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

const Notify = () => {
  const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [newNotificationsCount, setNewNotificationsCount] = useState(0);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  useEffect(() => {
    console.log(currentProfile);
    axios
      .get(`http://localhost:3000/api/user/userbyuid/${currentProfile}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setRefresh('');
      })
      .catch((error) => {
        throw error;
      });
  }, [refresh]);

  const newNotification = useCallback((note) => {
    console.log('this is a notification client', note);
    setNotifications((prev) => {
      setNewNotificationsCount(prev => prev + 1); // increment new notifications count
      return [...prev, note];
    });
  }, []);

  const handleNotificationClick = () => {
    setIsNotificationShown(!isNotificationShown);
    setNewNotificationsCount(0); // reset new notifications count
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/notifications/AllNotifications/${data.id}`)
      .then((res) => {
        setNotifications(res.data);
        console.log('notiff', res.data);
        setRefresh('');
      })
      .catch((error) => {
        throw error;
      });
    socket.on(`notification/${data.id}`, newNotification);
    return () => {
      socket.off(`notification/${data.id}`, newNotification);
    };
  }, [refresh]);

  return (
    <div>
      <div onClick={handleNotificationClick} style={{position: 'relative'}}>
        <i className="fa fa-bell"></i>
        {newNotificationsCount > 0 && (
          <div className='notification'>{newNotificationsCount}</div>
        )}
      </div>
      {isNotificationShown && (
        <div>
          {notifications.map((notification, index) => (
            <p key={index}>
              {notification.bidder_name} bid on {notification.brand_name} with{' '}
              {notification.added_bid}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notify;
