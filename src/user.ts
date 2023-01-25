import { renderBlock } from './lib.js';

export function renderUserBlock(
  name: string,
  src: string,
  countFavirited?: number
) {
  const favoritesCaption = countFavirited < 1 ? 'ничего нет' : countFavirited
  const hasFavoriteItems = countFavirited > 0 ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}


