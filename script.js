document.addEventListener('DOMContentLoaded', function () {
     const membersList = document.getElementById('members');
    const members = ['Ahmed', 'Khaled', 'Musa'];

     members.sort(() => Math.random() - 0.5);
    members.forEach(member => {

        const listItem = document.createElement('li');
        
          listItem.textContent = member;
        membersList.appendChild(listItem);
    });
});