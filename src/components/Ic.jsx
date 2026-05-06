/**
 * Icon component — renders a named SVG icon.
 * Props:
 *   n  — icon name (string key)
 *   s  — size in px (default 18)
 *   c  — extra className string
 */
const Ic = ({ n, s = 18, c = "" }) => {
  const p = {
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  const icons = {
    up: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    dn: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>,
    plus: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    srch: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    x: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    gr: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
    ch: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
    cg: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    pn: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    tr: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
    ok: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    rp: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
    lf: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="15 18 9 12 15 6"/></svg>,
    rt: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="9 18 15 12 9 6"/></svg>,
    cl: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    dl: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    mn: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
    sn: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
    wn: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    ac: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    rf: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    bd: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    cd: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    ly: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    ca: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    sp: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/></svg>,
    fi: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    ck: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    us: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    sh: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    up2: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/></svg>,
    ag: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    bell: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    tag: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    pie: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
    wallet: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4z"/></svg>,
    arrowR: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    contacts: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    user: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    mail: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    phone: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    id: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><circle cx="8.5" cy="10.5" r="2.5"/><polyline points="14 8 20 8"/><polyline points="14 12 20 12"/><polyline points="14 16 20 16"/><line x1="5" y1="16" x2="12" y2="16"/></svg>,
    info: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
    bank: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
    editUser: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 11l-4.5 4.5-2-2L20 11l3 0z"/><path d="M16.5 15.5l-2-2"/></svg>,
    key: <svg width={s} height={s} viewBox="0 0 24 24" {...p} className={c}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
  };

  return icons[n] || null;
};

export default Ic;
