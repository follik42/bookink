import { renderBlock } from './lib.js'


export interface ISearchFormData {
  startDate: string,
  endDate: string,
  maxPrice: number
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPlace { }


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
            <div><button id="searchButton">Найти</button></div>
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

// функция обработчик формы  ----- 2.
setTimeout(() => {
  const buttonSeact = document.querySelector('#searchButton');
  console.log(buttonSeact)
  buttonSeact.addEventListener('click', () => {
    event.preventDefault();
    const start = document.querySelector('#check-in-date') as HTMLInputElement;
    const end = document.querySelector('#check-out-date') as HTMLInputElement;
    const maxPrice = document.querySelector('#max-price') as HTMLInputElement;
    const searchData: ISearchFormData = {
      startDate: start.value,
      endDate: end.value,
      maxPrice: Number(maxPrice.value)
    }
    search(searchData, callBack);
  })
}, 500)

interface ISearchCallback {
  (error?: string, places?: IPlace[]): void
}


/**
 * function search
 * @param data ISearchFormData
 */
export function search(data: ISearchFormData, cb: ISearchCallback): void {
  console.log(data);
  setTimeout(() => {
    if ((Math.floor(Math.random() * 100)) > 50) {
      cb('error');
    } else {
      cb(null, []);
    }
  }, 2000)
}

// function callback
const callBack: ISearchCallback = (error, places) => {
  if (error) {
    console.log(error);
  } else {
    console.log(places);
  }
}