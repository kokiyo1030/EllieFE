// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === 'taehyeon' && password === 'kim') || (id === 'modang' && password === 'mozzy')) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'taehyeon') {
          resolve({
            name: 'taehyeon',
            role: 'admin'
          });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);