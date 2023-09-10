import { store, userResult, getUserByName } from './TheLeftSidebar.vue';

export async function searchUser(value) {
  if (!value) {
    store.dispatch('removeUsers');
    userResult.value = '';
    return;
  }

  const isValue = isNaN(value) ? '' : value;
  userResult.value = 'pending';
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${isValue}`);

    if (res.status === 404) {
      throw 'not user';
    }

    const data = await res.json();

    const users = Array.isArray(data) ? getUserByName(data, value) : data;

    userResult.value = 'success';

    if (Array.isArray(users) && !users.length) userResult.value = 'not user';

    store.dispatch('addUser', users);
  } catch (err) {
    userResult.value = err;
  }
}
