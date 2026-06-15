/* ESS App — Shared utilities */

// Tab switching
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-bar').forEach(bar => {
    bar.querySelectorAll('.tab-item').forEach(tab => {
      tab.addEventListener('click', () => {
        bar.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  });

  // Loan simulation (ajukan-loan page)
  const nominalInput = document.getElementById('loan-nominal');
  const tenorSelect  = document.getElementById('loan-tenor');
  if (nominalInput && tenorSelect) {
    const updateSim = () => {
      const raw = nominalInput.value.replace(/\D/g, '');
      const nominal = parseInt(raw) || 0;
      const tenor   = parseInt(tenorSelect.value) || 24;
      const cicilan = nominal > 0 ? Math.round(nominal / tenor) : 0;
      const pctTHP  = nominal > 0 ? ((cicilan / 5000000) * 100).toFixed(1) : '0';

      const fmt = n => 'Rp ' + n.toLocaleString('id-ID');
      const now = new Date();
      now.setMonth(now.getMonth() + tenor);
      const lunas = now.toLocaleDateString('id-ID', { month: 'short', year: 'numeric' });

      const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setEl('sim-nominal',  fmt(nominal));
      setEl('sim-tenor',    tenor + ' Bulan');
      setEl('sim-cicilan',  fmt(cicilan));
      setEl('sim-pct',      pctTHP + '% ' + (parseFloat(pctTHP) <= 30 ? '✓ (maks 30%)' : '⚠️ Melebihi 30%!'));
      setEl('sim-lunas',    lunas);

      // format input
      if (raw.length > 0) {
        nominalInput.value = 'Rp ' + parseInt(raw).toLocaleString('id-ID');
      }
    };
    nominalInput.addEventListener('input', updateSim);
    tenorSelect.addEventListener('change', updateSim);
  }
});
