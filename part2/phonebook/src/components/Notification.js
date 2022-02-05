const Notification = ({ notification }) => {
  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };
  const errorStyle = {
    ...successStyle,
    color: 'red',
  };

  if (notification === null) {
    return null;
  }

  return (
    <div style={notification.isSuccess ? successStyle : errorStyle}>
      {notification.message}
    </div>
  );
};

export default Notification;
