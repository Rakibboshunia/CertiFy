
/* js/delete.js */
const delBtn = document.getElementById('delBtn');
const delStatus = document.getElementById('delStatus');

delBtn.addEventListener('click', async ()=>{
  const q = document.getElementById('delq').value.trim();
  if(!q){ toast('Cid or tx দেন'); return; }
  delStatus.innerHTML = 'Preparing delete...';

  // delete is a concept: either call smart contract admin function or remove from backend DB.
  // Here we simulate:
  await new Promise(r=>setTimeout(r,900));
  delStatus.innerHTML = `<div class="notice">Marked ${q} as deleted (demo)</div>`;
});
