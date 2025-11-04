/* js/app.js - shared utilities */
const SELECTORS = {
  statusEl: id => document.getElementById(id)
}

/* simple toast */
function toast(msg, time=3000){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position='fixed'; t.style.right='20px'; t.style.bottom='20px';
  t.style.background='#222'; t.style.color='#fff'; t.style.padding='10px 14px';
  t.style.borderRadius='8px'; t.style.boxShadow='0 6px 18px rgba(0,0,0,0.2)';
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), time);
}

/* placeholder: connect to wallet (Metamask) */
async function connectWallet(){
  if(!window.ethereum) { toast('MetaMask পাওয়া যায়নি'); return null; }
  try {
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    return accounts[0];
  } catch(e) {
    console.error(e);
    toast('Wallet connection failed');
    return null;
  }
}

/* helper for formatting small hash */
function shortHash(h){
  if(!h) return '';
  return h.slice(0,6)+'...'+h.slice(-4);
}
