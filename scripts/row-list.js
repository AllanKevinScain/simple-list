import users from './users.js';

const usersList = document.getElementById('users-list');

users.forEach((user) => {
  const li = document.createElement('li');
  li.className =
    'flex items-center list-none border-b border-neutral-700 p-[16px] hover:bg-neutral-200 group';

  li.innerHTML = `
      <div>
        <img
          src="${user.avatarImg}"
          alt="avatar-${user.id}"
          class="w-[80px] rounded-full"
        />
      </div>

      <div class="px-[20px] flex-1">
        <p class="text-[18px] text-neutral-800">${user.name}</p>
        <p class="text-[14px] text-neutral-400">${user.email}</p>
      </div>

      <div class="flex gap-[16px] opacity-0 group-hover:opacity-30">
        <a href="">
          <img src="imagens/delete.png" alt="Ícone de remoção" />
        </a>

        <a href="">
          <img src="imagens/edit.png" alt="Ícone de edição" />
        </a>
      </div>
  `;

  usersList.appendChild(li);
});
