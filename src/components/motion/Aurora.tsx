/** Fixed mesh/aurora gradient backdrop. Three drifting radial blobs (CSS, transform-only). */
export function Aurora() {
  return (
    <div aria-hidden="true" className="aurora">
      <span className="aurora-blob aurora-blob--1" />
      <span className="aurora-blob aurora-blob--2" />
      <span className="aurora-blob aurora-blob--3" />
    </div>
  );
}
