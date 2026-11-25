window.EliteUtils = {
  money(value){ return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(Number(value||0)); },
  num(value){ return new Intl.NumberFormat('en-IN').format(Number(value||0)); },
  date(value){ if(!value) return '—'; const d=new Date(value); return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}); },
  getParam(name){ return new URLSearchParams(location.search).get(name); },
  month(key){ return window.ELITE_DATA.months[key] || window.ELITE_DATA.months.dec2026; },
  students(){ return window.ELITE_DATA.students; },
  student(id){ return this.students().find(s=>String(s.id)===String(id)); },
  payments(key){ return key==='jan2027' ? [] : window.ELITE_DATA.payments.filter(p=>p.month===key); },
  visitors(key){ return window.ELITE_DATA.visitors[key] || []; },
  metrics(key='dec2026'){
    const d=window.ELITE_DATA, blank=key==='jan2027';
    const students=blank?[]:d.students;
    const payments=this.payments(key);
    const received=payments.reduce((a,p)=>a+p.amount,0);
    const pending=blank?0:84000;
    const expenses=d.expenses[key]?.total||0;
    return {students:students.length,beds:d.hostel.totalBeds,occupied:blank?0:142,empty:blank?d.hostel.totalBeds:18,rent:blank?0:1278000,received,pending,expenses,profit:received-expenses,visitors:this.visitors(key).length};
  },
  badge(status){ return `<span class="status-badge ${status==='Paid'||status==='Active'?'success':status==='Pending'?'warning':'danger'}">${status}</span>`; },
  escape(value){ return String(value??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
};
