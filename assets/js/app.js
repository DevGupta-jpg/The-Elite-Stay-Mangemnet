/* =========================================================
   GLOBAL APP FILE
   Sidebar + Navbar + Bottom navigation are created here.
   Change them ONCE here -> every page updates automatically.
   ========================================================= */
(function(){
  const U=window.EliteUtils, D=window.ELITE_DATA;
  const path=location.pathname;
  const page=path.split('/').pop() || 'index.html';
  const active=page==='index.html'?'dashboard':page.replace('.html','');

  const nav=[
    ['dashboard','index.html','bi-grid-1x2-fill','Dashboard'],
    ['students','pages/students.html','bi-people-fill','Students'],
    ['fees','pages/fees.html','bi-receipt','Fees & Payments'],
    ['expenses','pages/expenses.html','bi-wallet2','Expenses'],
    ['visitors','pages/visitors.html','bi-person-walking','Visitors'],
    ['reports','pages/reports.html','bi-bar-chart-fill','Reports'],
    ['settings','pages/settings.html','bi-gear-fill','Settings']
  ];
  const link=(href)=>page==='index.html'?href:href.replace(/^pages\//,'');
  const navItems=nav.map(n=>`<a class="nav-item ${active===n[0]?'active':''}" href="${link(n[1])}"><i class="bi ${n[2]}"></i><span>${n[3]}</span></a>`).join('');

  const sidebar=`<aside class="sidebar">
    <div class="brand"><div class="brand-logo"><i class="bi bi-house-heart-fill"></i></div><div><strong>The Elite Stay</strong><small>PG & Hostel</small><small>Management</small></div></div>
    <nav class="side-nav">${navItems}</nav>
    <div class="sidebar-footer"><i class="bi bi-building"></i><span>Hostel Management<br>All in One Place</span></div>
  </aside>`;

  const navbar=`<header class="topbar"><button class="icon-btn menu-toggle" aria-label="Menu"><i class="bi bi-list"></i></button><div class="top-search"><i class="bi bi-search"></i><input id="globalSearch" placeholder="Search anything..."></div><div class="top-actions"><button class="icon-btn"><i class="bi bi-bell"></i><span class="dot"></span></button><div class="admin"><div class="avatar">A</div><div><strong>Admin</strong><small>Manager</small></div><i class="bi bi-chevron-down"></i></div></div></header>`;

  const bottom=`<nav class="bottom-nav"><a href="${link('index.html')}"><i class="bi bi-house-fill"></i><span>Home</span></a><a href="${link('pages/students.html')}"><i class="bi bi-people"></i><span>Students</span></a><a href="${link('pages/fees.html')}"><i class="bi bi-cash-stack"></i><span>Fees</span></a><a href="${link('pages/expenses.html')}"><i class="bi bi-wallet2"></i><span>Expenses</span></a><a href="${link('pages/settings.html')}"><i class="bi bi-grid-3x3-gap"></i><span>More</span></a></nav>`;

  document.addEventListener('DOMContentLoaded',()=>{
    const sb=document.querySelector('[data-sidebar]'); if(sb) sb.innerHTML=sidebar;
    const nb=document.querySelector('[data-navbar]'); if(nb) nb.innerHTML=navbar;
    const bn=document.querySelector('[data-bottom-nav]'); if(bn) bn.innerHTML=bottom;
    document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.body.classList.toggle('sidebar-open'));
    document.addEventListener('click',e=>{ if(e.target.closest('.sidebar') || e.target.closest('.menu-toggle')) return; document.body.classList.remove('sidebar-open'); });
    document.getElementById('globalSearch')?.addEventListener('keydown',e=>{ if(e.key==='Enter'&&e.target.value.trim()) location.href=link('pages/students.html')+'?q='+encodeURIComponent(e.target.value.trim()); });
    document.querySelectorAll('[data-year-month]').forEach(el=>{ el.textContent=D.months.dec2026.short; });
  });
})();
