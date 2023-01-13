import { renderBlock } from './lib.js';
export function renderUserBlock(name, src, countFavirited) {
    const favoritesCaption = countFavirited < 1 ? 'ничего нет' : countFavirited;
    const hasFavoriteItems = countFavirited > 0 ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBWSxFQUNaLEdBQVcsRUFDWCxjQUFzQjtJQUV0QixNQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFBO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFM0QsV0FBVyxDQUNULFlBQVksRUFDWjs7Ozs7O2tDQU04QixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayhcbiAgbmFtZTogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgY291bnRGYXZpcml0ZWQ6IG51bWJlclxuKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBjb3VudEZhdmlyaXRlZCA8IDEgPyAn0L3QuNGH0LXQs9C+INC90LXRgicgOiBjb3VudEZhdmlyaXRlZFxuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gY291bnRGYXZpcml0ZWQgPiAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIvaW1nL2F2YXRhci5wbmdcIiBhbHQ9XCJXYWRlIFdhcnJlblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPldhZGUgV2FycmVuPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2hhc0Zhdm9yaXRlSXRlbXMgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcbn1cbiJdfQ==