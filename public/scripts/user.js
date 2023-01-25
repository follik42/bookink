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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBWSxFQUNaLEdBQVcsRUFDWCxjQUF1QjtJQUV2QixNQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFBO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFM0QsV0FBVyxDQUNULFlBQVksRUFDWjs7Ozs7O2tDQU04QixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayhcbiAgbmFtZTogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgY291bnRGYXZpcml0ZWQ/OiBudW1iZXJcbikge1xuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gY291bnRGYXZpcml0ZWQgPCAxID8gJ9C90LjRh9C10LPQviDQvdC10YInIDogY291bnRGYXZpcml0ZWRcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGNvdW50RmF2aXJpdGVkID4gMCA/IHRydWUgOiBmYWxzZTtcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiL2ltZy9hdmF0YXIucG5nXCIgYWx0PVwiV2FkZSBXYXJyZW5cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj5XYWRlIFdhcnJlbjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG59XG5cblxuIl19