/* js/upload.js */
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadStatus = document.getElementById('uploadStatus');

uploadBtn.addEventListener('click', async ()=>{
  const file = fileInput.files[0];
  const name = document.getElementById('studentName').value || 'Unknown';
  const inst = document.getElementById('institution').value || 'Unknown';
  if(!file){ toast('ফাইল সিলেক্ট করো'); return; }

  uploadStatus.innerHTML = 'Uploading to IPFS...';
  try {
    /* TODO: Replace this stub with real IPFS HTTP client call.
       Example using ipfs-http-client:
       const client = ipfsHttpClient({url: 'https://ipfs.infura.io:5001/api/v0'});
       const added = await client.add(file);
       const cid = added.path;
    */
    // STUB: simulate upload
    await new Promise(r=>setTimeout(r,1200));
    const fakeCid = 'bafy' + Math.random().toString(36).slice(2,12);
    uploadStatus.innerHTML = `<div class="notice">Uploaded to IPFS CID: <strong>${fakeCid}</strong></div>
      <div style="margin-top:8px"><button class="btn" onclick="anchorToChain('${fakeCid}')">Anchor to Chain (simulate)</button></div>`;
  } catch(e){
    console.error(e);
    uploadStatus.innerHTML = `<div class="notice" style="background: #ffdede; color:#9a1a1a">Upload failed</div>`;
  }
});

async function anchorToChain(cid){
  uploadStatus.innerHTML = 'Connecting wallet...';
  const account = await connectWallet();
  if(!account) { uploadStatus.innerHTML='Wallet not connected'; return; }
  uploadStatus.innerHTML = `Preparing transaction from ${shortHash(account)}...`;

  /* TODO: Insert smart contract interaction here (ethers.js or web3).
     Example with ethers.js:
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.storeCertificate(cid, otherMeta...);
      await tx.wait();
  */
  // STUB simulation:
  await new Promise(r=>setTimeout(r,1300));
  const fakeTx = '0x' + Math.random().toString(16).slice(2,20);
  uploadStatus.innerHTML = `<div class="notice">Certificate anchored. TxHash: <strong>${fakeTx}</strong></div>
    <div class="small">CID: ${cid}</div>`;
  toast('Upload & anchor simulated');
}
