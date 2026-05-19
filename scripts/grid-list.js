import users from './users.js';

const usersList = document.getElementById('users-list');

users.forEach((user) => {
  const li = document.createElement('li');
  li.className =
    'flex flex-col basis-[280px] min-h-[380px] list-none bg-white rounded-t-lg overflow-y-auto shadow-md';

  li.innerHTML = `
      <div class="bg-bg-${user.id} bg-cover bg-center h-[50%] relative flex justify-center">
        <img
          src="${user.avatarImg}"
          alt="avatar-${user.id}"
          class="w-[80px] rounded-full absolute -bottom-[40px]"
        />
      </div>

      <div class="px-[20px] flex flex-col flex-1 items-center justify-end pb-[20px]">
        <p class="text-[24px] text-neutral-600">${user.name}</p>
        <p class="text-[18px]">${user.email}</p>
      </div>

      <div class="flex bg-neutral-200 h-[50px]">
        <a href="" class="w-full h-full hover:bg-neutral-300 inline-flex justify-end items-center pr-[14%]">
          <img src="imagens/delete.png" alt="Ícone de remoção" />
        </a>

        <a href="" class="w-full h-full hover:bg-neutral-300 inline-flex justify-start items-center pl-[14%]">
          <img src="imagens/edit.png" alt="Ícone de edição" />
        </a>
      </div>
  `;

  usersList.appendChild(li);
});
