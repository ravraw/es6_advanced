const getUser = (id, callback) => {
  const user = setTimeout(id => {
    return {
      name: "rav",
      id: id
    };
  }, 2000);
  callback(user);
};

getUser(1000, a => {
  console.log(a);
});
