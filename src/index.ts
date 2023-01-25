import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

/**
 * function getUserdata from localstorage
 * @returns {username: unknown, avatarUrl:unknown}
 */
function getUserData(): { username: unknown, avatarUrl: unknown } {

  const username = window.localStorage.getItem('username');
  const avatarUrl = window.localStorage.getItem('avatarUrl');

  return { username, avatarUrl }
}

/**
 * function getFavoritesUserAmount from localstorage
 * @returns countFavorites:unknown
 */
function getFavoritesAmount(): unknown {
  const count = window.localStorage.getItem('favoritesAmount');

  return count;
}


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('name', '5', 6);
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});




