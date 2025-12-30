
/* js/verify.js */
const verifyBtn = document.getElementById('verifyBtn');
const result = document.getElementById('result');

verifyBtn.addEventListener('click', async ()=>{
  const q = document.getElementById('query').value.trim();
  if(!q){ toast('CID বা TxHash দিন'); return; }
  result.innerHTML = 'Searching...';

  // Decide if input is CID (starts with bafy) or tx hash (0x)
  if(q.startsWith('bafy') || q.length < 60){
    // treat as CID
    result.innerHTML = `<div class="notice">Fetching from IPFS gateway for CID: <strong>${q}</strong></div>`;
    try {
      // TODO: fetch from IPFS gateway e.g., https://ipfs.io/ipfs/{cid}
      // Example:
      // const res = await fetch(`https://ipfs.io/ipfs/${q}`);
      // const blob = await res.blob();
      // show preview or metadata
      await new Promise(r=>setTimeout(r,900));
      result.innerHTML += `<div style="margin-top:10px">Mock metadata: <br><strong>Student:</strong> John Doe <br><strong>Institute:</strong> ABC University</div>`;
    } catch(e){
      console.error(e); result.innerHTML = 'IPFS fetch failed';
    }
  } else if(q.startsWith('0x')){
    result.innerHTML = `Looking up transaction ${shortHash(q)}...`;
    try {
      // TODO: Lookup transaction on chain via provider (ethers.js) and then read stored CID
      await new Promise(r=>setTimeout(r,1000));
      const fakeCid = 'bafy' + Math.random().toString(36).slice(2,12);
      result.innerHTML = `<div class="notice">Found anchored CID: <strong>${fakeCid}</strong></div>
        <div style="margin-top:8px">Fetch metadata from IPFS to confirm.</div>`;
    } catch(e){
      console.error(e); result.innerHTML = 'Chain lookup failed';
    }
  } else {
    result.innerHTML = 'Formato পরিচিত নয় — CID বা 0x ট্যারান্সহ্যাশ দিন';
  }
});
