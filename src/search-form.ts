import { renderBlock } from './lib.js'

export function renderSearchFormBlock(startDate: string = getDefaultDate().startDate, endDate: string = getDefaultDate().endDate) {
  const min_date = getMinDate();
  const maxDate = getMaxDate();
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${startDate}" min="${min_date}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${endDate}" min="${min_date}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}


function getMinDate(): string {
  const date = new Date();
  const month_min_date = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day_min_date = date.getDate() < 10 ? `0${date.getDate() + 1}` : date.getDate();
  return `${date.getFullYear()}-${month_min_date}-${day_min_date}`
}
function getDefaultDate(): { startDate: string, endDate: string } {
  const date = new Date();
  const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  const endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3);
  const monthStart = startDate.getMonth() < 10 ? `0${startDate.getMonth() + 1}` : startDate.getMonth() + 1;
  const dayStart = startDate.getDate() < 10 ? `0${startDate.getDate() + 1}` : startDate.getDate();
  const monthEnd = endDate.getMonth() < 10 ? `0${endDate.getMonth() + 1}` : endDate.getMonth() + 1;
  const dayEnd = endDate.getDate() < 10 ? `0${endDate.getDate() + 1}` : endDate.getDate();
  return {
    startDate: `${startDate.getFullYear()}-${monthStart}-${dayStart}`,
    endDate: `${endDate.getFullYear()}-${monthEnd}-${dayEnd}`
  }
}

function getMaxDate(): string {
  const date = new Date();
  let year = date.getFullYear();
  if (date.getMonth() == 12) {
    year++;
  }
  let month_max_date = date.getMonth() < 10 ? `0${date.getMonth() + 2}` : date.getMonth() + 1;
  if (month_max_date == 12) {
    month_max_date = 1;
  }
  const day_max_date = new Date(year, (date.getMonth() == 12 ? 0 : date.getMonth()) + 2, 0);
  return `${year}-${month_max_date}-${day_max_date.getDate()}`
}

// function getCurrentDate(): string {
//   const date = new Date();
// }