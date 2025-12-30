
/* js/admin.js - demo table */
const certTableBody = document.querySelector('#certTable tbody');
const demoData = [
  {cid: 'bafyabc12345', student:'Alice Rahman', inst:'ABC School', tx:'0xaaa111'},
  {cid: 'bafyxyz67890', student:'Bob Khan', inst:'XYZ College', tx:'0xbbb222'}
];
function renderTable(){
  certTableBody.innerHTML = '';
  demoData.forEach((r, idx)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.cid}</td><td>${r.student}</td><td>${r.inst}</td>
      <td>${r.tx}</td>
      <td>
        <button class="btn" onclick="viewCid('${r.cid}')">View</button>
        <button class="btn secondary" onclick="deleteEntry(${idx})">Delete</button>
      </td>`;
    certTableBody.appendChild(tr);
  });
}
function viewCid(cid){
  window.open(`https://ipfs.io/ipfs/${cid}`, '_blank');
}
function deleteEntry(idx){
  if(!confirm('Are you sure to delete (demo only)?')) return;
  demoData.splice(idx,1);
  renderTable();
  toast('Deleted (demo)');
}
renderTable();
